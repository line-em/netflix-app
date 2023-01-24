import React from "react";
import BrowseContainer from "../components/BrowseContainer";
import useContent from "../hooks/useContent";

const Browse = () => {
	const { series } = useContent("series");
	const { films } = useContent("films");

	// console.log(series);
	// console.log(films);
	return <BrowseContainer />;
};

export default Browse;
