# 🚁 AeroTwin Sentinel

## AI-Powered Drone Cybersecurity Digital Twin System

AeroTwin Sentinel is a real-time AI-powered cybersecurity platform designed to simulate drone communication environments, detect cyber anomalies, and visualize attacks using a Digital Twin architecture.

The system combines Artificial Intelligence, cybersecurity analytics, real-time telemetry monitoring, and interactive visualization to demonstrate how modern drone infrastructures can be protected against cyber threats.

---

# 🚀 System Workflow

1. A Drone Simulator generates live telemetry data including:

   * Signal strength
   * Packet loss
   * GPS integrity
   * Network latency
   * Traffic volume

2. A Digital Twin continuously mirrors the drone state in real time.

3. The AI anomaly detection model analyzes telemetry patterns continuously.

4. When attack simulation is enabled, abnormal telemetry is injected to imitate cyber attacks.

5. The AI detects deviations from learned normal behavior and triggers cybersecurity alerts.

6. The dashboard visualizes:

   * Threat status
   * Anomaly score
   * Real-time telemetry
   * Live analytics graph
   * Radar scanner
   * 3D drone digital twin

---

# ✨ Core Features

* Real-time drone telemetry simulation
* AI-based anomaly detection
* Digital Twin monitoring system
* Cyber attack simulation engine
* Automated defense response alerts
* Real-time telemetry analytics
* Live threat visualization dashboard
* Animated radar scanner
* Interactive 3D drone visualization
* Futuristic cybersecurity interface

---

# 🧠 AI & Machine Learning

### Model Used

* Isolation Forest

### Purpose

The AI model is trained to identify abnormal drone communication behavior using unsupervised anomaly detection.

### Functionality

The model analyzes:

* Signal fluctuations
* Packet loss behavior
* GPS integrity patterns
* Traffic anomalies
* Communication instability

The model detects suspicious activity by comparing incoming telemetry against learned normal operational patterns.

---

# 📊 Dataset Information

The project uses a drone communication telemetry dataset containing:

* 45,000+ telemetry records
* 35 cybersecurity and network-related features

### Key Features Used

* signal_strength
* packet_loss_rate
* round_trip_time
* transmission_power
* signal_noise_ratio
* network_traffic_volume
* gps_signal_integrity
* base_station_load

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Recharts
* Three.js
* React Three Fiber

## Backend

* FastAPI
* Python
* Uvicorn

## AI/ML

* Scikit-learn
* Pandas
* NumPy
* Joblib

---

# 🔄 Real-Time Digital Twin Workflow

| Real-World Drone System                         | AeroTwin Sentinel Simulation                                            |
| ----------------------------------------------- | ----------------------------------------------------------------------- |
| Physical drone sends live telemetry             | Drone simulator generates live telemetry                                |
| Sensors monitor GPS, latency, and signal health | Simulator creates telemetry such as GPS integrity, RTT, and packet loss |
| Digital Twin mirrors drone state virtually      | Dashboard and 3D drone act as the Digital Twin                          |
| AI continuously monitors communication patterns | Isolation Forest analyzes telemetry in real time                        |
| Cyber attacks affect communication stability    | Attack simulator injects GPS spoofing and signal anomalies              |
| Security systems trigger alerts and mitigation  | AI detects anomalies and activates defense alerts                       |

### Real-Time Processing Flow

```text
Drone Simulator
      ↓
Digital Twin Update
      ↓
AI Anomaly Detection
      ↓
Threat Detection
      ↓
Defense Alert Activation
      ↓
Live Dashboard Visualization
```

The system continuously generates telemetry every second, analyzes the data using AI, and updates the dashboard in real time to simulate how a real drone cybersecurity monitoring platform operates.

---

# 🔒 Cybersecurity Concepts Covered

* AI-Based Intrusion Detection
* Drone Communication Security
* Digital Twin Security
* Real-Time Threat Monitoring
* GPS Spoofing Detection
* Network Anomaly Detection
* Signal Jamming Simulation
* Telemetry Security Analytics
* Automated Defense Systems
* Cyber Attack Simulation
* Behavioral Anomaly Analysis

---

# 📁 Project Structure

```text
AeroTwinSentinel/
│
├── backend/
├── frontend/
├── dataset/
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd AeroTwinSentinel
```

---

# 🚀 Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\Activate.ps1
pip install -r requirements.txt
python ai/train_model.py
uvicorn main:app --reload
```

### Backend Server

```text
http://127.0.0.1:8000
```

---

# 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Frontend Server

```text
http://localhost:5173
```

---

# 🖥️ Dashboard Components

The dashboard includes:

* Real-time telemetry cards
* Threat level monitoring
* AI anomaly score
* Live analytics graphs
* Animated radar scanner
* 3D digital twin drone
* Cyber attack status visualization

---

# 👨‍💻 Author

Developed as a real-time AI-powered cybersecurity and Digital Twin project for drone threat monitoring and anomaly detection.
