from main import KimlikTespit, base64_to_img, img_save
import numpy as np
import os

# önyüz kontrolü
# Input: String[], String[]    Output: Bool
weights = "weights/onyuz_weight.pt"
base64_code = ""  # base64 kodu buraya gelecek
source = img_save(base64_code)

kimlikTespit = KimlikTespit(weights, img_save(base64_code))
onyuz_sonuc = kimlikTespit.kimlik_kontrol()
os.remove(source)

# arkayüz kontrolü
# Input: String[], String[]    Output: Bool
weights = "weights/arkayuz_weight.pt"
base64_code = ""  # base64 kodu buraya gelecek
source = img_save(base64_code)

kimlikTespit.set_weight_source(weights, source)
arkayuz_sonuc = kimlikTespit.kimlik_kontrol()
os.remove(source)
# df = kimlikTespit.df --> Verilerin olduğu Dataframe'i döndür

df = kimlikTespit.df

person_photo = df[df['label'] == 'fotograf']['base64'].iloc[0]
# Yüz tespiti gerçekleştir. BASE64_FOTOGRAF_GIRILECEK kısmına BASE64 decoded fotoğraf gelmeli.
# Input: String[]    Output: Bool
yuz_kontrol_sonuc = kimlikTespit.yuz_kontrol(person_photo)

print(onyuz_sonuc)
print(arkayuz_sonuc)
print(yuz_kontrol_sonuc)

print(df)
