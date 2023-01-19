import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: auto;
	justify-content: center;
	margin-top: 20px;
	flex-wrap: wrap;

	@media (max-width: 1000px) {
		align-items: center;
	}
`;

export const Input = styled.input`
	max-width: 450px;
	width: 90%;
	margin: auto;
	border: 0;
	padding: 20px;
	font-family: inherit;
`;

export const Button = styled.button`
	max-width: 450px;
	display: flex;
	align-items: center;
	background: #e50914;
	color: white;
	text-transform: uppercase;
	padding: 18px;
	font-family: inherit;
	font-size: 1.3rem;
	font-weight: 400;
	border: 0;
	cursor: pointer;
	margin: 27px auto;

	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 24px;

		@media (max-width: 1000px) {
			width: 16px;
		}
	}

	&:hover {
		background: #f40612;
	}

	@media (max-width: 1000px) {
		height: 50px;
		font-size: 16px;
		margin-top: 20px;
		font-weight: bold;
	}
`;

export const Text = styled.p`
	font-size: 19px;
	color: white;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 16px;
	}
`;
