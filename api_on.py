from flask import Flask, request, jsonify
from main import KimlikTespit, img_save
import os
import pandas as pd 


app = Flask(__name__)

@app.route('/process_front', methods=['POST'])
def process_photo():
    try:
        data = request.json
        on_yuz_image = data.get('on_yuz_image', None)
        
        if on_yuz_image is None:
            return jsonify({'error': 'On yuz data is missing.'}), 400
      
        # Perform image processing using your existing code
        weights = "weights/onyuz_weight.pt"
        source = img_save(on_yuz_image)
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



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
