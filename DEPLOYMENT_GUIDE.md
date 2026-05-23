# 🚀 AeroTwin Sentinel - Deployment Guide

## Complete Deployment Instructions

### Option 1: Local Development Setup

#### Prerequisites
- Python 3.11+
- Node.js 18+
- npm or yarn
- Git

#### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Train the AI model (if dataset is present)
python ai/train_model.py

# Start the backend server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Backend URL:** http://127.0.0.1:8000

#### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

**Frontend URL:** http://localhost:5173

---

### Option 2: Docker Compose (Recommended)

#### Prerequisites
- Docker (latest version)
- Docker Compose

#### Steps
```bash
# From project root directory
docker-compose up -d

# Check running containers
docker-compose ps

# View logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Stop services
docker-compose down
```

**Access the application:**
- Backend: http://localhost:8000
- Frontend: http://localhost:5173/
- API Docs: http://localhost:8000/docs

---

### Option 3: Cloud Deployment (AWS EC2)

#### Step 1: Set up EC2 Instance
```bash
# Connect to your EC2 instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Update system
sudo yum update -y
sudo yum install -y docker git

# Start Docker
sudo systemctl start docker
sudo usermod -aG docker ec2-user
```

#### Step 2: Clone and Deploy
```bash
# Clone repository
git clone https://github.com/JeevithasHetty/Drone-Hijack.git
cd Drone-Hijack

# Build and run with Docker Compose
docker-compose up -d

# Access via your instance public IP
# http://your-instance-ip:8000 (Backend)
# http://your-instance-ip:5173 (Frontend)
```

---

### Option 4: Heroku Deployment

#### Prerequisites
- Heroku CLI installed
- Heroku account

#### Steps
```bash
# Login to Heroku
heroku login

# Create Heroku app
heroku create your-drone-app

# Set environment variables
heroku config:set DEBUG=False

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

---

## API Endpoints Reference

### 1. Get Telemetry Data
```bash
GET /telemetry
```

**Response:**
```json
{
  "telemetry": {
    "signal_strength": 94.5,
    "packet_loss_rate": 1.2,
    "round_trip_time": 22.3,
    "altitude": 100,
    "transmission_power": 50,
    "signal_noise_ratio": 40,
    "network_traffic_volume": 520.5,
    "gps_signal_integrity": 95,
    "base_station_load": 30
  },
  "anomaly": false,
  "anomaly_score": 0.0234
}
```

### 2. Toggle Attack Simulation
```bash
GET /toggle_attack
```

**Response:**
```json
{
  "attack_enabled": true
}
```

---

## Environment Variables

Create a `.env` file in the backend directory:

```env
# Backend
DEBUG=True
DATABASE_URL=sqlite:///./test.db
API_HOST=0.0.0.0
API_PORT=8000

# Frontend
VITE_API_URL=http://localhost:8000
VITE_WEBSOCKET_URL=ws://localhost:8000/ws
```

---

## Troubleshooting

### Backend Not Starting

**Error:** `ModuleNotFoundError`
```bash
# Reinstall dependencies
pip install --upgrade -r requirements.txt
```

**Error:** `Port 8000 already in use`
```bash
# Kill the process
lsof -i :8000
kill -9 <PID>
# Or use a different port
uvicorn main:app --port 8001
```

### Model File Not Found

```bash
# Ensure model file exists
python backend/ai/train_model.py

# Check file exists
ls -la backend/ai/drone_model.pkl
```

### CORS Issues

The backend already has CORS enabled. If you still face issues:
- Ensure frontend URL is in `allow_origins`
- Check browser console for specific errors
- Verify frontend is accessing correct backend URL

### Docker Issues

```bash
# Rebuild containers
docker-compose down
docker-compose up --build -d

# Clean up
docker system prune -a
```

---

## Performance Optimization

### Backend
- Enable production mode: Remove `--reload` flag
- Use Gunicorn for production:
  ```bash
  pip install gunicorn
  gunicorn -w 4 -b 0.0.0.0:8000 main:app
  ```

### Frontend
- Build for production: `npm run build`
- Deploy static files to CDN
- Enable gzip compression

---

## Monitoring & Logging

### View Backend Logs
```bash
# Docker
docker-compose logs backend -f

# Local
tail -f backend.log
```

### Health Check
```bash
curl http://localhost:8000/docs
```

---

## Security Considerations

- [ ] Change CORS `allow_origins` from "*" to specific domains
- [ ] Add authentication (JWT, OAuth)
- [ ] Use HTTPS in production
- [ ] Validate all input data
- [ ] Add rate limiting
- [ ] Use environment variables for secrets

---

## Next Steps

1. Deploy to your preferred hosting platform
2. Set up monitoring and alerting
3. Configure CI/CD pipeline
4. Add authentication layer
5. Implement database persistence
6. Add SSL/TLS certificates

For more help: Check GitHub Issues or create a new one!
