function ThreatPanel({

    anomaly,
    anomaly_score,
    defense

}) {

    let threatLevel = "LOW"

    if (anomaly_score < -0.30) {

        threatLevel = "CRITICAL"

    } else if (anomaly_score < -0.10) {

        threatLevel = "HIGH"

    } else if (anomaly_score < 0) {

        threatLevel = "MEDIUM"
    }

    return (

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">

            <h2 className="text-3xl mb-5 text-red-400">

                Threat Detection

            </h2>

            {

                anomaly ? (

                    <div>

                        <h1 className="text-red-500 text-4xl font-bold animate-pulse">

                            ATTACK DETECTED

                        </h1>

                    </div>

                ) : (

                    <h1 className="text-green-500 text-4xl font-bold">

                        SYSTEM SAFE

                    </h1>

                )

            }

            <div className="mt-8 space-y-4">

                <p className="text-2xl">

                    Threat Level:
                    <span className="ml-3 text-yellow-400">

                        {threatLevel}

                    </span>

                </p>

                <p className="text-2xl">

                    Anomaly Score:
                    <span className="ml-3 text-cyan-400">

                        {anomaly_score}

                    </span>

                </p>

            </div>

            {

                defense && (

                    <div className="mt-8 bg-red-950 p-4 rounded-xl">

                        <p className="text-xl">
                            {defense.status}
                        </p>

                        <p className="text-xl">
                            {defense.action}
                        </p>

                    </div>

                )

            }

        </div>
    )
}

export default ThreatPanel