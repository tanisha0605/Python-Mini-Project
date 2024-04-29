import cv2
import base64
from flask import Flask, jsonify

app = Flask(__name__)

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
    for image_name in image_names:
        image_path = f'/home/yuvraj/Coding/Exploratory-Data-Analysis-Mental-Health-Problem-master/figures/{image_name}'
        image = cv2.imread(image_path)
        print(image)
        if image is not None:
            _, buffer = cv2.imencode('.png', image)
            image_encoded = base64.b64encode(buffer).decode('utf-8')
            images.append({'name': image_name, 'data': image_encoded})
        else:
            print(f"Failed to load image: {image_path}")

    return jsonify({'images': images})

if __name__ == '__main__':
    app.run()
