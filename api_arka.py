from flask import Flask, request, jsonify
from main import KimlikTespit, img_save
import os
import pandas as pd

app = Flask(__name__)

@app.route('/process_back', methods=['POST'])
def process_photo():
    try:
        data = request.json
        arka_yuz_image = data.get('arka_yuz_image', None)
        
        if arka_yuz_image is None:
            return jsonify({'error': 'Arka yuz data is missing.'}), 400
        
        # Perform image processing using your existing code
        weights = "weights/arkayuz_weight.pt"
        source = img_save(arka_yuz_image)
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



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
