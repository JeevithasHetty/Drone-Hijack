import { useEffect, useState } from "react"

import API from "../services/api"

import TelemetryPanel from "../components/TelemetryPanel"
import ThreatPanel from "../components/ThreatPanel"
import LiveChart from "../components/LiveChart"
import Radar from "../components/Radar"
import Drone3D from "../components/Drone3D"
function Dashboard() {

    const [data, setData] = useState(null)
    const [history, setHistory] = useState([])

    const fetchTelemetry = async () => {

        const response = await API.get("/telemetry")

        setData(response.data)

setHistory(prev => [

    ...prev.slice(-9),

    {

        time: new Date().toLocaleTimeString(),

        signal_strength:
            response.data.telemetry.signal_strength,

        packet_loss_rate:
            response.data.telemetry.packet_loss_rate

    }

])
    }

    useEffect(() => {

        fetchTelemetry()

        const interval = setInterval(fetchTelemetry, 1000)

        return () => clearInterval(interval)

    }, [])

    const triggerAttack = async () => {

        await API.get("/toggle_attack")
    }

    if (!data) {

        return (

            <div className="text-white p-10">
                Loading...
            </div>
        )
    }

    return (

        <div className="min-h-screen bg-slate-950 text-white p-10">

            <h1 className="text-6xl font-bold mb-10 text-cyan-400">

                AeroTwin Sentinel

            </h1>

            <button
                onClick={triggerAttack}
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-xl mb-10"
            >
                Toggle Cyber Attack
            </button>

            <div className="grid grid-cols-2 gap-10">

                <TelemetryPanel telemetry={data.telemetry} />

                <ThreatPanel
    anomaly={data.anomaly}
    anomaly_score={data.anomaly_score}
    defense={data.defense}
/>
<div className="mt-10">

    <LiveChart history={history} />
    <div className="mt-10">

    <Radar />
    <div className="mt-10">

   <Drone3D anomaly={data.anomaly} />

</div>

</div>

</div>
            </div>

        </div>
    )
}

export default Dashboard