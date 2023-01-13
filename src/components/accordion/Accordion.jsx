import React from "react";
import { Container, Inner, Title, Header, Body, Item } from "./styles";

const Accordion = ({ children, ...props }) => {
	return (
		<Container {...props}>
			<Inner>{children}</Inner>
		</Container>
	);
};

const AccordionTitle = ({ children, ...props }) => {
	return <Title {...props}>{children}</Title>;
};

const AccordionItem = ({ children, ...props }) => {
	return <Item {...props}>{children}</Item>;
};

const AccordionHeader = ({ children, ...props }) => {
	return <Header {...props}>{children}</Header>;
};

const AccordionBody = ({ children, ...props }) => {
	return <Body {...props}>{children}</Body>;
};

Accordion.Title = AccordionTitle;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
Accordion.Item = AccordionItem;
export default Accordion;
