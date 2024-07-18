import pandas as pd
from utils import load_object


class PredictPipeline:
    def __init__(self):
        pass

    def predict(self,features):
        try:
            model_path="model.pkl"
            preprocessor_path='preprocessor.pkl'
            print("Before Loading")
            model=load_object(file_path=model_path)
            preprocessor=load_object(file_path=preprocessor_path)
            print("After Loading")
            data_scaled=preprocessor.transform(features)
            preds=model.predict(data_scaled)
            return preds
        
        except Exception as e:
            raise e



class CustomData:
    def __init__(  self,
        frequency: int,
        attack_angle: float,
        chord_length :float,
        free_stream_velocity: float,
        suction_side_displacement_thickness: float,
    ):

        self.frequency = frequency

        self.attack_angle = attack_angle

        self.chord_length = chord_length

        self.free_stream_velocity = free_stream_velocity

        self.suction_side_displacement_thickness = suction_side_displacement_thickness 

    def get_data_as_data_frame(self):
        try:
            custom_data_input_dict = {
                "frequency": [self.frequency],
                "attack_angle": [self.attack_angle],
                "chord_length": [self.chord_length],
                "free_stream_velocity": [self.free_stream_velocity],
                "suction_side_displacement_thickness": [self.suction_side_displacement_thickness],
            }

            return pd.DataFrame(custom_data_input_dict)

        except Exception as e:
            raise e