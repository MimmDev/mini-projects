import "./Clock.css";

export const Clock = () => {
    return (
        <div className="clock">
            <div>
                <div className="time-line one"></div>
                <div className="time-line two"></div>
                <div className="time-line three"></div>
                <div className="time-line four"></div>
                <div className="time-line five"></div>
                <div className="time-line six"></div>
                <div className="time-line seven"></div>
                <div className="time-line eight"></div>
                <div className="time-line nine"></div>
                <div className="time-line ten"></div>
                <div className="time-line eleven"></div>
                <div className="time-line twelve"></div>
            </div>
            <div className="time-line-mask"></div>
            <div className="arms">
                <div className="dial-cover"></div>
                <div className="arm second-arm"></div>
                <div className="arm minute-arm"></div>
                <div className="arm hour-arm"></div>
            </div>
            <div className="shadow"></div>
        </div>
    );
};
