import pandas as pd
from sklearn.ensemble import IsolationForest
import joblib

df = pd.read_csv("dataset/drone_dataset.csv")

features = df[[
    "signal_strength",
    "packet_loss_rate",
    "round_trip_time",
    "altitude",
    "transmission_power",
    "signal_noise_ratio",
    "network_traffic_volume",
    "gps_signal_integrity",
    "base_station_load"
]]

model = IsolationForest(contamination=0.05)

model.fit(features)

joblib.dump(model, "ai/drone_model.pkl")

print("AI Model Trained Successfully")