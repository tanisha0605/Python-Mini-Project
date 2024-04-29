import os
import cv2
import base64
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def index():
    image_names = [
        'history_treatment_willingness.png',
        'resources_and_awareness.png',
        'resources_willingness_regplot.png',
        'resources_willingness.png',
        'work_interfere_willingness.png',
        'workplace_resources_hist.png'
    ]
    images = []
    base_dir = '/Users/tanishakanal/Documents/Sem4/Python/Mini Project/python-mini-project/figures/'
    for image_name in image_names:
        image_path = os.path.join(base_dir, image_name)
        image = cv2.imread(image_path)
        if image is not None:
            _, buffer = cv2.imencode('.png', image)
            image_encoded = base64.b64encode(buffer).decode('utf-8')
            images.append({'name': image_name, 'data': image_encoded})
        else:
            print(f"Failed to load image: {image_path}")

    return jsonify({'images': images})

if __name__ == '__main__':
    app.run()







