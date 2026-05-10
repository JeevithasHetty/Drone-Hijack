from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from simulator.drone_simulator import DroneSimulator
from twin.digital_twin import DigitalTwin
from attacks.attack_simulator import AttackSimulator
from defense.defense_engine import DefenseEngine
from ai.anomaly_detector import detect_anomaly

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize modules
simulator = DroneSimulator()
twin = DigitalTwin()
attack = AttackSimulator()
defense = DefenseEngine()

# Global attack flag
attack_enabled = False


@app.get("/telemetry")
def telemetry():

    # Get drone telemetry data
    data = simulator.update()

    # Apply attack if enabled
    if attack_enabled:
        data = attack.gps_spoofing(data)

    # Update digital twin
    twin.update(data)

    # Detect anomaly
    result = detect_anomaly(data)

    response = {
        "telemetry": data,
        "anomaly": result["anomaly"],
        "anomaly_score": result["score"]
    }

    # Activate defense if anomaly detected
    if result["anomaly"]:
        response["defense"] = defense.activate_defense()

    return response


@app.get("/toggle_attack")
def toggle_attack():

    global attack_enabled

    attack_enabled = not attack_enabled

    return {
        "attack_enabled": attack_enabled
    }