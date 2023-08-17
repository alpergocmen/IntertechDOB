from main import KimlikTespit, base64_to_img
import numpy as np

# önyüz kontrolü
# Input: String[], String[]    Output: Bool
weights = "weights/onyuz_weight.pt"
source = "C:/Users/koray/Desktop/test/onyuz_kimlik.jpg"

kimlikTespit = KimlikTespit(weights, source)
onyuz_sonuc = kimlikTespit.kimlik_kontrol()

# arkayüz kontrolü
# Input: String[], String[]    Output: Bool
weights = "weights/arkayuz_weight.pt"
source = "C:/Users/koray/Desktop/test/1040kimlik.jpg"

kimlikTespit.set_weight_source(weights, source)
arkayuz_sonuc = kimlikTespit.kimlik_kontrol()

# df = kimlikTespit.df --> Verilerin olduğu Dataframe'i döndür

df = kimlikTespit.df

ornek = df[df['label'] == 'fotograf']['base64'].iloc[0]
# Yüz tespiti gerçekleştir. BASE64_FOTOGRAF_GIRILECEK kısmına BASE64 decoded fotoğraf gelmeli.
# Input: String[]    Output: Bool
yuz_kontrol_sonuc = kimlikTespit.yuz_kontrol(ornek)

print(onyuz_sonuc)
print(arkayuz_sonuc)
print(yuz_kontrol_sonuc)

