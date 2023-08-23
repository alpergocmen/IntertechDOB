from flask import Flask, request, jsonify
from main import KimlikTespit, img_save, yuz_kontrol
import pandas as pd
import os
import json
import numpy as np

app = Flask(__name__)

@app.route('/process_face', methods=['POST'])
def process_photo():
    try:
        data = request.json
        yuz_image = data.get('yuz_image', None)
        
        if yuz_image is None:
            return jsonify({'error': 'Face image data is missing.'}), 400
        
        df_concat = pd.read_csv("df_concat.csv")
        yuz_kontrol_sonuc = yuz_kontrol(df_concat, yuz_image)
        
        response = {
            'yuz_kontrol_sonuc': yuz_kontrol_sonuc
        }
        
        os.remove("df.csv")
        os.remove("df_concat.csv")
        return jsonify(response), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
