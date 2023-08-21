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
