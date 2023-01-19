import React from "react";
import { Container, Title, Subtitle } from "./styles";

const Feature = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};

const FeatureTitle = ({ children, ...props }) => {
	return <Title {...props}>{children}</Title>;
};

const FeatureSubtitle = ({ children, ...props }) => {
	return <Subtitle {...props}>{children}</Subtitle>;
};

Feature.Title = FeatureTitle;
Feature.Subtitle = FeatureSubtitle;
export default Feature;
