import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 90vh;

	/* padding: 165px 45px; */
`;

export const Title = styled.h1`
	color: white;
	max-width: 640px;
	font-size: 50px;
	font-weight: 700;
	margin: auto;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const Subtitle = styled.h2`
	color: white;
	font-size: 26px;
	font-weight: 400;
	margin: 10px auto 0;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`;
