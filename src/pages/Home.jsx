import React from "react";
import FaqContainer from "../components/accordion/Faq";
import FooterContainer from "../components/footer/FooterContainer";
import JumbotronContainer from "../components/jumbotron/JumbotronContainer";
import OptFormContainer from "../components/opt-form/OptFormContainer";

const Home = () => {
	return (
		<>
			<JumbotronContainer />
			<FaqContainer />
			<OptFormContainer />
			<FooterContainer />
		</>
	);
};

export default Home;
