import styled, { keyframes } from "styled-components";

const moveToPosition = (
    startX: number,
    startY: number,
    finalX: number,
    finalY: number
) => keyframes`
	100% {
		transform: translate3d(${finalX}px, ${finalY}px, 0)
	}
`;

const Shape = styled.div<{
    startX: number;
    startY: number;
    finalX: number;
    finalY: number;
}>`
    position: fixed;

    animation: ${(props) =>
            moveToPosition(
                props.startX,
                props.startY,
                props.finalX,
                props.finalY
            )}
        1s ease-in-out forwards;
`;

export const Square = styled(Shape)`
    width: 20px;
    height: 20px;
    border: 2px solid black;
`;

export const Triangle = styled(Shape)`
    width: 0;
    height: 0;
    border-bottom: 20px solid black;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
`;
