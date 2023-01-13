import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	max-width: 1000px;
	flex-direction: column;
	padding: 70px 56px;
	margin: auto;

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Column = styled.section`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const Row = styled.article`
	display: grid;
	gap: 15px;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}
`;

export const Link = styled.a`
	color: #757575;
	margin-bottom: 20px;
	font-size: 13px;
	text-decoration: none;
`;

export const Title = styled.p`
	font-size: 1rem;
	color: #757575;
	margin-bottom: 40px;
`;

export const Text = styled.div`
	font-size: 0.7rem;
	color: #757575;
	margin-bottom: 40px;
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;
