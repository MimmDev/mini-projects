import styled, { keyframes } from "styled-components";

const ClockArm = styled.div<{ startAngle: number }>`
    position: absolute;
    height: 80px;
    top: 20px;
    transform-origin: bottom;
    border-radius: 6px;
`;

export const SecondArm = styled(ClockArm)`
    width: 2px;
    background-color: black;
    animation: ${(props) => rotate(props.startAngle)} 60s infinite linear;
`;

export const MinuteArm = styled(ClockArm)`
    width: 4px;
    background-color: black;
    animation: ${(props) => rotate(props.startAngle)} 3600s infinite linear;
`;

export const HourArm = styled(ClockArm)`
    height: 50px;
    top: 50px;
    width: 4px;
    background-color: black;
    animation: ${(props) => rotate(props.startAngle)} 216000s infinite linear;
`;

const rotate = (startAngle: number) => keyframes`
	0% {
		transform: rotate(${startAngle}deg);
	}
	100% {
		transform: rotate(${startAngle + 360}deg);
	}
`;

export const DialCover = styled.div`
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
`;
