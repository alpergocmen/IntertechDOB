from flask import Flask, request, jsonify
from main import KimlikTespit, img_save
import base64
import numpy as np
import os

app = Flask(__name__)

@app.route('/process_back', methods=['POST'])
def process_photo():
    try:
        data = request.json
        base64_image = data.get('base64_image', None)
        
        if base64_image is None:
            return jsonify({'error': 'Base64 image data is missing.'}), 400
        
        print(base64_image)
        # Perform image processing using your existing code
        weights = "weights/arkayuz_weight.pt"
        source = img_save(base64_image)
        kimlikTespit = KimlikTespit(weights, source)
        arkayuz_sonuc = kimlikTespit.kimlik_kontrol()
        os.remove(source)
        
        response = {
            'arkayuz_sonuc': arkayuz_sonuc,
            # Add other results here
        }
        print(response)
        return jsonify(response), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
