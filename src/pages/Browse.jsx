import React from "react";
import BrowseContainer from "../components/BrowseContainer";
import useContent from "../hooks/useContent";
import { concatenateMediaData } from "../utils/genres";

const Browse = () => {
	const series = useContent("series");
	const films = useContent("films");
	const slides = concatenateMediaData(films, series);
	return <BrowseContainer slides={slides} />;
};

export default Browse;
