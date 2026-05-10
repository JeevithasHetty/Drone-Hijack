import joblib
import numpy as np

model = joblib.load("ai/drone_model.pkl")

def detect_anomaly(data):

    sample = np.array([[
        data["signal_strength"],
        data["packet_loss_rate"],
        data["round_trip_time"],
        data["altitude"],
        data["transmission_power"],
        data["signal_noise_ratio"],
        data["network_traffic_volume"],
        data["gps_signal_integrity"],
        data["base_station_load"]
    ]])

    prediction = model.predict(sample)

    return bool(prediction[0] == -1)