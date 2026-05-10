function Radar() {

    return (

        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg flex items-center justify-center">

            <div className="radar-container">

                <div className="radar-circle"></div>

                <div className="radar-circle delay1"></div>

                <div className="radar-circle delay2"></div>

                <div className="radar-line"></div>

                <div className="radar-dot"></div>

            </div>

        </div>
    )
}

export default Radar