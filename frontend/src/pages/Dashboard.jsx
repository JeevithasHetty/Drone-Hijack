import { useEffect, useState } from "react"
import axios from "axios"

import LiveChart from "../components/LiveChart"
import Radar from "../components/Radar"
import Drone3D from "../components/Drone3D"

function Dashboard() {

    const [data, setData] = useState(null)

    const [history, setHistory] = useState([])

    useEffect(() => {

        fetchTelemetry()

        const interval = setInterval(fetchTelemetry, 1000)

        return () => clearInterval(interval)

    }, [])

    const fetchTelemetry = async () => {

        const response = await axios.get(
            "http://127.0.0.1:8000/telemetry"
        )

        setData(response.data)

        setHistory(prev => [

            ...prev.slice(-10),

            {
                time: new Date().toLocaleTimeString(),

                signal_strength:
                    response.data.telemetry.signal_strength,

                packet_loss_rate:
                    response.data.telemetry.packet_loss_rate
            }
        ])
    }

    const toggleAttack = async () => {

        await axios.get(
            "http://127.0.0.1:8000/toggle_attack"
        )
    }

    if (!data) {

        return <div>Loading...</div>
    }

    return (

        <div className="min-h-screen bg-black text-white p-6">

            <h1 className="text-5xl font-bold text-cyan-400 mb-8 text-center tracking-wide">
                AeroTwin Sentinel
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LiveChart data={history} />
                <Radar data={data} />
            </div>
            <Drone3D data={data} />
        </div>
    )
}

export default Dashboard