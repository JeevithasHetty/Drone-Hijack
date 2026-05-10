import {

    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer

} from "recharts"

function LiveChart({ history }) {

    return (

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">

            <h2 className="text-3xl mb-5 text-cyan-400">

                Live Threat Analytics

            </h2>

            <ResponsiveContainer width="100%" height={300}>

                <LineChart data={history}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="time" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="signal_strength"
                        stroke="#00ffff"
                        strokeWidth={3}
                    />

                    <Line
                        type="monotone"
                        dataKey="packet_loss_rate"
                        stroke="#ff0000"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    )
}

export default LiveChart