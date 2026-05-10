from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from simulator.drone_simulator import DroneSimulator
from twin.digital_twin import DigitalTwin
from attacks.attack_simulator import AttackSimulator
from defense.defense_engine import DefenseEngine
from ai.anomaly_detector import detect_anomaly

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

simulator = DroneSimulator()
twin = DigitalTwin()
attack = AttackSimulator()
defense = DefenseEngine()

attack_enabled = False

@app.get("/")
def home():

    return {
        "message": "AeroTwin Sentinel Running"
    }

@app.get("/toggle_attack")
def toggle_attack():

    global attack_enabled

    attack_enabled = not attack_enabled

    return {
        "attack_enabled": attack_enabled
    }

@app.get("/telemetry")
def telemetry():

    data = simulator.update()

    if attack_enabled:

        data = attack.gps_spoofing(data)

    twin.update(data)

    anomaly = detect_anomaly(data)

    response = {

        "telemetry": data,
        "anomaly": anomaly

    }

    if anomaly:

        response["defense"] = defense.activate_defense()

    return response