from flask import Flask, request, jsonify
from main import KimlikTespit, img_save, yuz_kontrol
import pandas as pd
import os
import numpy as np

app = Flask(__name__)

@app.route('/process_front', methods=['POST'])
def process_front():
    try:
        data = request.json
        on_yuz_image = data.get('on_yuz_image', None)
        
        if on_yuz_image is None:
            return jsonify({'error': 'On yuz data is missing.'}), 400
      
        # Perform image processing using your existing code
        weights = "weights/onyuz_weight.pt"
        source = img_save(on_yuz_image, "on")
        kimlik_tespit = KimlikTespit(weights, source)
        on_yuz_sonuc = kimlik_tespit.kimlik_kontrol()
        os.remove(source)
        
        df = kimlik_tespit.df
        df.to_csv("df.csv")
        
        response = {
            'on_yuz_sonuc': on_yuz_sonuc,
            # Add other results here
        }
        
        return jsonify(response), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/process_back', methods=['POST'])
def process_back():
    try:
        data = request.json
        arka_yuz_image = data.get('arka_yuz_image', None)

        
        if arka_yuz_image is None:
            return jsonify({'error': 'Arka yuz data is missing.'}), 400
        
        # Perform image processing using your existing code
        weights = "weights/arkayuz_weight.pt"
        source = img_save(arka_yuz_image, "arka")
        kimlik_tespit = KimlikTespit(weights, source)
        arka_yuz_sonuc = kimlik_tespit.kimlik_kontrol()
        os.remove(source)  
        
        df2 = kimlik_tespit.df
        df1 = pd.read_csv("df.csv")
        
        df_concat = pd.concat([df1, df2], ignore_index=False,)
        df_concat.drop(df_concat.columns[df_concat.columns.str.contains('unnamed',case = False)],axis = 1, inplace = True)
        df_concat.reset_index(drop=True, inplace=True)
        
        df_concat = kimlik_tespit.extract_text(df_concat)
        
        barkod_kontrol_sonuc = kimlik_tespit.match_barcode(df_concat)
        
        df_concat.to_csv("df_concat.csv", index=False)
        
        response = {
            'arka_yuz_sonuc': arka_yuz_sonuc,
            'barkod_kontrol_sonuc': barkod_kontrol_sonuc,
        }
        
        return jsonify(response), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
    
@app.route('/process_face', methods=['POST'])
def process_face():
    try:
        data = request.json
        yuz_image = data.get('yuz_image', None)
        
        if yuz_image is None:
            return jsonify({'error': 'Face image data is missing.'}), 400
        
        df_concat = pd.read_csv("df_concat.csv")
        yuz_kontrol_sonuc = yuz_kontrol(df_concat, yuz_image)
        name = df_concat[df_concat["label"] == "isim"]["text"].iloc[0]
        surname = df_concat[df_concat["label"] == "soyad"]["text"].iloc[0]
        birth = df_concat[df_concat["label"] == "dogum"]["text"].iloc[0]
        gender = df_concat[df_concat["label"] == "cinsiyet"]["text"].iloc[0]
        
        response = {
            'yuz_kontrol_sonuc': yuz_kontrol_sonuc,
            'name': name,
            'surname': surname,
            'birth': birth,
            'gender': gender

        }
        
        os.remove("df.csv")
        os.remove("df_concat.csv")
        return jsonify(response), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
