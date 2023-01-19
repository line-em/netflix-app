import React from "react";
import { Link } from "react-router-dom";
import FaqContainer from "../components/accordion/Faq";
import FooterContainer from "../components/footer/FooterContainer";
import JumbotronContainer from "../components/jumbotron/JumbotronContainer";

const Home = () => {
	return (
		<>
			<JumbotronContainer />
			<FaqContainer />
			<FooterContainer />
		</>
	);
};

export default Home;
