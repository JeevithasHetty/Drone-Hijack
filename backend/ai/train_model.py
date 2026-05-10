import pandas as pd
from sklearn.ensemble import IsolationForest
import joblib

print("\nLoading Dataset...\n")

df = pd.read_csv("dataset/drone_dataset.csv")

print("Dataset Loaded Successfully")

print("\nDataset Shape:")
print(df.shape)

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

print("\nSelected Features:")
print(features.columns)

print("\nSample Training Data:\n")
print(features.head())

print("\nTraining Isolation Forest Model...\n")

model = IsolationForest(
    contamination=0.05,
    random_state=42
)

model.fit(features)

joblib.dump(model, "ai/drone_model.pkl")

print("\nAI Model Trained Successfully")
print("Model learned normal drone communication patterns")