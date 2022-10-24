import { useMemo } from "react";
import "./Clock.css";
import { DialCover, HourArm, MinuteArm, SecondArm } from "./Clock.styles";

export const Clock = () => {
    const { second, minute, hour } = useMemo(() => {
        const currentTime = new Date();
        return {
            second: (currentTime.getSeconds() / 60) * 360,
            minute: (currentTime.getMinutes() / 60) * 360,
            hour: (currentTime.getHours() / 12) * 360,
        };
    }, []);

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
                <HourArm startAngle={hour} />
                <MinuteArm startAngle={minute} />
                <SecondArm startAngle={second} />
                <DialCover />
            </div>
            <div className="shadow"></div>
        </div>
    );
};
