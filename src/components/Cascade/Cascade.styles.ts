import styled, { keyframes } from "styled-components";

export const slideIn = keyframes`
	from {
		opacity: 0;
		transform: translate3d(-100px, 0, 0);
	}

	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
`;

export const CascadeIn = styled.div<{ interval: number }>`
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
    animation: ${slideIn} 1s ease forwards;
    animation-delay: ${(props) => props.interval}s;
`;
