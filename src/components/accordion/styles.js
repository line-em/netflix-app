import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
	margin-bottom: 40px;
	max-width: 1200px;
`;

export const Inner = styled.div`
	display: flex;
	padding: 70px 45px;
	flex-direction: column;
	max-width: 60ch;
	margin: auto;
`;

export const Item = styled.div`
	color: white;
	margin-bottom: 10px;

	&:first-of-type {
		margin-top: 3em;
	}
`;

export const Title = styled.h1`
	font-size: 2rem;
	line-height: 1.1;
	margin-top: 0;
	margin-bottom: 8px;
	color: white;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	margin-bottom: 1px;
	font-size: 1.5rem;
	font-weight: 400;
	background: #303030;
	padding: 1rem;
	user-select: none;
	align-items: center;
	width: 100%;

	img {
		filter: brightness(0) invert(1);
		width: 1.2rem;

		@media (max-width: 600px) {
			width: 1rem;
		}
	}

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;

export const Body = styled.div`
	transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
	font-size: 1.2rem;
	font-weight: 300;
	line-height: 1.4;
	background: #303030;
	padding: 1rem;
	user-select: none;
	align-items: center;
	width: 100%;

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;
