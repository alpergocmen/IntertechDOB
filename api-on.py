from flask import Flask, request, jsonify
from main import KimlikTespit

app = Flask(__name__)

@app.route('/process_front', methods=['POST'])
def process_photo():
    try:
        data = request.json
        source_path = data.get('source_path', None)
        print("Received source path:", source_path)  # Add this line

        
        if source_path is None:
            return jsonify({'error': 'Image source path is missing.'}), 400

        # Perform image processing using your existing code
        weights = "weights/onyuz_weight.pt"
        kimlikTespit = KimlikTespit(weights, source_path)
        onyuz_sonuc = kimlikTespit.kimlik_kontrol()
        
        response = {
            'onyuz_sonuc': onyuz_sonuc,
            # Add other results here
        }
        
        return jsonify(response), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
