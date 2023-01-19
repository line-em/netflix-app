import React from "react";
import FaqContainer from "../components/accordion/Faq";
import Feature from "../components/feature/Feature";
import FooterContainer from "../components/footer/FooterContainer";
import HeaderContainer from "../components/header/HeaderContainer";
import JumbotronContainer from "../components/jumbotron/JumbotronContainer";
import OptFormContainer from "../components/opt-form/OptFormContainer";

const Home = () => {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
					<Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
					<OptFormContainer />
				</Feature>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqContainer />
			<OptFormContainer />
			<FooterContainer />
		</>
	);
};

export default Home;
