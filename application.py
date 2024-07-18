from flask import Flask, request, jsonify
from predict import CustomData, PredictPipeline
from flask_cors import CORS

application = Flask(__name__)
app = application
CORS(app)

@app.route('/predict', methods=['POST'])
def predict_datapoint():
    data = CustomData(
        frequency=request.form.get('frequency'),
        attack_angle=request.form.get('attack_angle'),
        chord_length=request.form.get('chord_length'),
        free_stream_velocity=request.form.get('free_stream_velocity'),
        suction_side_displacement_thickness=request.form.get('suction_side_displacement_thickness'),
    )
    pred_df = data.get_data_as_data_frame()
    
    predict_pipeline = PredictPipeline()
    results = predict_pipeline.predict(pred_df)
    
    
    result_float = float(results[0])

    print('results',result_float)
    
    return jsonify({'results': result_float})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
