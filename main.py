import argparse
import detect
import cv2
from PIL import Image
import numpy as np
import pandas as pd
import torch
import base64
from io import BytesIO
from deepface import DeepFace
import os
import pytesseract
from pyzbar.pyzbar import decode


def validate_tckn(tc_number):
    # TC kimlik numarasının uzunluğu 11 olmalıdır.
    if len(tc_number) != 11:
        return False

    # TC kimlik numarasının sadece rakamlardan oluştuğunu kontrol etme
    if not tc_number.isdigit():
        return False

    # İlk hane 0 olmamalıdır.
    if tc_number[0] == "0":
        return False

    # Son hane çift sayı olmalıdır.
    if int(tc_number[-1]) % 2 != 0:
        return False

    # Kontrol basamakları hesaplaması
    odd_sum = sum(int(tc_number[i]) for i in range(0, 9, 2))
    even_sum = sum(int(tc_number[i]) for i in range(1, 8, 2))
    tenth_digit = (odd_sum * 7 - even_sum) % 10
    eleventh_digit = (odd_sum + even_sum + int(tc_number[9])) % 10

    # Kontrol basamakları doğrulaması
    if int(tc_number[9]) != tenth_digit or int(tc_number[10]) != eleventh_digit:
        return False

    return True


def base64_to_img(base64_img):
    # Base64 kodunu çözme
    decoded_data = base64.b64decode(base64_img)

    # Çözülen veriyi bir BytesIO nesnesine aktarma
    image_stream = BytesIO(decoded_data)

    # ara belleğe yaz
    buffered = BytesIO()

    # JPEG dosyasına kaydetme
    Image.open(image_stream).save(buffered, "JPEG")

    return Image.open(buffered)


def img_save(photo):
    image1_data = base64.b64decode(photo)

    # Convert binary data to PIL Image objects
    image1 = Image.open(BytesIO(image1_data))

    image1.save("temp_image.jpg")

    return "temp_image.jpg"


class KimlikTespit:
    def __init__(self, weights, source):
        """
        @type weights: str
        """
        self.base64format = None
        self.weights = weights
        self.source = source
        self.data = "data/coco128.yaml"
        self.imgsz = (640, 640)
        self.device = torch.device('cpu')
        self.conf_thres = 0.50
        self.iou_thres = 0.45
        self.max_det = 1000
        self.device = ""
        self.view_img = False
        self.save_txt = True
        self.save_conf = False
        self.save_crop = True
        self.nosave = True
        self.classes = None
        self.agnostic_nms = False
        self.augment = False
        self.visualize = False
        self.update = False
        self.project = "runs/detect"
        self.name = "exp"
        self.exist_ok = False
        self.line_thickness = 3
        self.hide_labels = False
        self.hide_conf = False
        self.half = False
        self.dnn = False
        self.vid_stride = 1
        self.df = pd.DataFrame(columns=["class", "label", "base64"])

    # Barkod eşleştirme
    def match_barcode(self):
        def read_barcode_from_base64(base64_image):
            image_data = base64.b64decode(base64_image)
            image_stream = BytesIO(image_data)
            image = Image.open(image_stream)
            image_cv2 = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

            decoded_objects = decode(image_cv2)
            if decoded_objects:
                for obj in decoded_objects:
                    barcode_data = obj.data.decode('utf-8')
            else:
                print("Barkod Okunamadı")
            return barcode_data

        base64_image = self.df.loc[self.df["label"] == "barkod", "base64"].iloc[0]
        a = read_barcode_from_base64(base64_image)

        if self.df.loc[self.df["label"] == "tckn", "text"].iloc[0] == a:
            return True
        else:
            return False

    # Kimlikteki bilgieri çıkarıp df'e yaz
    def extract_text(self):
        pytesseract.pytesseract.tesseract_cmd = "pyteserract/tesseract.exe"

        def base64_to_img(base64_img):
            image_data = base64.b64decode(base64_img)
            image_stream = BytesIO(image_data)
            buffered = BytesIO()
            Image.open(image_stream).save(buffered, format="JPEG")
            return cv2.cvtColor(np.array(Image.open(buffered)), cv2.COLOR_RGB2BGR)

        def denoiseImage(img):
            img_denoise = cv2.fastNlMeansDenoisingColored(img, None, 10, 10, 7, 15)
            imgGray = cv2.cvtColor(img_denoise, cv2.COLOR_BGR2GRAY)
            imgBlur = cv2.GaussianBlur(imgGray, (5, 5), 1)
            ret, imgf = cv2.threshold(imgBlur, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
            kernel = np.ones((1, 1), np.uint8)
            img_dilation = cv2.dilate(imgf, kernel, iterations=1)
            img_erosion = cv2.erode(img_dilation, kernel, iterations=1)
            return img_erosion

        def extract_text_from_image(image):
            # Crop the lower part of the image (adjust the cropping parameters as needed)
            height, width, _ = image.shape
            cropped_image = image[int(height * 0.4):, :]

            denoised_image = denoiseImage(cropped_image)
            custom_config = r'--oem 3 --psm 6'
            extracted_text = pytesseract.image_to_string(denoised_image, config=custom_config, lang='tur')

            return extracted_text

        class_list = ["isim", "dogum", "tckn", "serino", "soyad", "cinsiyet", "baba_adi", "anne_adi", "pen"]
        self.df["text"] = np.NaN
        for i in class_list:
            b64 = self.df[self.df["label"] == i]["base64"].iloc[0]
            image = base64_to_img(b64)
            extracted_text = extract_text_from_image(image)
            self.df.loc[self.df["label"] == i, "text"] = extracted_text
        self.df["text"] = self.df["text"].str.strip("\n")

        if validate_tckn(self.df[self.df["label"] == "tckn"]["text"].iloc[0]):
            print("Geçerli TCKN")
        else:
            print("Geçersiz TCKN")

        return self.df

    def set_weight_source(self, x, y):
        self.weights = x
        self.source = y

    def kimlik_kontrol(self):
        detections = detect.run(self.weights, self.source, self.data, self.imgsz, self.conf_thres, self.iou_thres,
                                self.max_det, self.device,
                                self.view_img, self.save_txt, self.save_conf, self.save_crop, self.nosave, self.classes,
                                self.agnostic_nms, self.augment,
                                self.visualize, self.update, self.project, self.name, self.exist_ok,
                                self.line_thickness, self.hide_labels, self.hide_conf,
                                self.half, self.dnn, self.vid_stride)

        # doğruluk kontrolu
        label_counts = {}
        onyuz_labels = ['onyuz', 'tckk', 'tckn', 'hilal', 'soyad', 'isim', 'dogum', 'serino', 'cinsiyet', 'imza',
                        'fotograf']
        arkayuz_labels = ['arkayuz', 'id_check', 'barkod', 'anne_adi', 'baba_adi', 'pen', 'alt_barkod']
        
        # En boy oranı kontrolü
        for dct in [dct for dct in detections if dct["class"] == 0]:
            oran = dct["bbox"][3] / dct["bbox"][4]
            if oran <= 1 or oran >= 2:
                return False

        # Kimlik üzerindeki alanlar kontrolü ve sayımı
        label_counts = {}
        for detection in detections:
            label = detection["label"]
            if label in label_counts:
                label_counts[label] += 1
            else:
                label_counts[label] = 1

        # Arkayüz veya ön yüz için kontrol yapısı
        if "weights/arkayuz_weight.pt" in self.weights:
            required_labels = arkayuz_labels
        else:
            required_labels = onyuz_labels

        for required_label in required_labels:
            if required_label not in label_counts:
                return False

            if label_counts[required_label] > 1:
                return False

        # Eğer tüm kontroller geçerliyse, DataFrame'e yazdır
        for idx, detection in enumerate(detections):
            # self.df.loc[idx] = [class_idx, label, cropped_base64]
            if self.weights == "onyuz_weight.pt":
                self.df.loc[idx] = [detection["class"], detection["label"], detection["cropped_base64"]]
            else:
                row_count = self.df.shape[0]
                self.df.loc[row_count + idx] = [detection["class"], detection["label"], detection["cropped_base64"]]
        return True

    # Face Matcher
    def yuz_kontrol(self, p_photo):
        base64_image2 = self.df[self.df['label'] == 'fotograf']['base64'].iloc[0]

        # Decode base64 strings to binary image data
        image1_data = base64.b64decode(p_photo)
        image2_data = base64.b64decode(base64_image2)

        # Convert binary data to PIL Image objects
        image1 = Image.open(BytesIO(image1_data))
        image2 = Image.open(BytesIO(image2_data))

        image1_path = "temp_image1.jpg"
        image2_path = "temp_image2.jpg"
        image1.save(image1_path)
        image2.save(image2_path)

        # Perform the verification using DeepFace
        result = DeepFace.verify(image1_path, image2_path, model_name="ArcFace")

        # Clean up temporary files
        image1.close()
        image2.close()

        # You can remove the temporary files here using os.remove()
        os.remove(image1_path)
        os.remove(image2_path)

        return result["verified"]

        # # Karşılaştırma yapılacak iki resmi belirtin
        # id_photo = self.df[self.df['label'] == 'fotograf']['base64'].iloc[0]
        #
        # # Yüz karşılaştırma işlemini gerçekleştir
        # result = DeepFace.verify(id_photo, present_photo, model_name="ArcFace")
        #
        # return result
