function TelemetryPanel({ telemetry }) {

    if (!telemetry) {

        return <div>Loading telemetry...</div>
    }

    return (

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">

            <h2 className="text-3xl mb-5 text-cyan-400">

                Drone Telemetry

            </h2>

            <div className="space-y-3 text-lg">

                <p>
                    Signal Strength:
                    {telemetry.signal_strength?.toFixed(2)}
                </p>

                <p>
                    Packet Loss:
                    {telemetry.packet_loss_rate?.toFixed(2)}
                </p>

                <p>
                    Round Trip Time:
                    {telemetry.round_trip_time?.toFixed(2)}
                </p>

                <p>
                    Altitude:
                    {telemetry.altitude}
                </p>

                <p>
                    Traffic Volume:
                    {telemetry.network_traffic_volume?.toFixed(2)}
                </p>

                <p>
                    GPS Integrity:
                    {telemetry.gps_signal_integrity}
                </p>

            </div>

        </div>
    )
}

export default TelemetryPanel