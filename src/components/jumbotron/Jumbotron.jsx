import React from "react";
import { Container, Item, Inner, Title, SubTitle, Image, Pane } from "./styles";

const Jumbotron = ({ children, direction = "row", ...props }) => {
	return (
		<Item {...props}>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
};

const JumbotronContainer = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};
const JumbotronTitle = ({ children, ...props }) => {
	return <Title {...props}>{children}</Title>;
};
const JumbotronSubTitle = ({ children, ...props }) => {
	return <SubTitle {...props}>{children}</SubTitle>;
};
const JumbotronImage = ({ children, ...props }) => {
	return <Image {...props}>{children}</Image>;
};
const JumbotronPane = ({ children, ...props }) => {
	return <Pane {...props}>{children}</Pane>;
};

Jumbotron.Pane = JumbotronPane;
Jumbotron.Image = JumbotronImage;
Jumbotron.Title = JumbotronTitle;
Jumbotron.SubTitle = JumbotronSubTitle;
Jumbotron.Container = JumbotronContainer;
export default Jumbotron;
