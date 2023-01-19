import React, { createContext, useContext, useState } from "react";
import { Container, Inner, Title, Header, Body, Item, Frame } from "./styles";

const ToggleContext = createContext();

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

const AccordionFrame = ({ children, ...props }) => {
	return <Frame {...props}>{children}</Frame>;
};

const AccordionItem = ({ children, ...props }) => {
	const [toggleShow, setToggleShow] = useState(false);
	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...props}>{children}</Item>
		</ToggleContext.Provider>
	);
};

const AccordionHeader = ({ children, ...props }) => {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);
	return (
		<Header onClick={() => setToggleShow(!toggleShow)} {...props}>
			{children}
			{toggleShow ? (
				<img src="/images/icons/close-slim.png" alt="Close" />
			) : (
				<img src="/images/icons/add.png" alt="Open" />
			)}
		</Header>
	);
};

const AccordionBody = ({ children, ...props }) => {
	const { toggleShow } = useContext(ToggleContext);
	return toggleShow ? <Body {...props}>{children}</Body> : null;
};

Accordion.Title = AccordionTitle;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
Accordion.Item = AccordionItem;
Accordion.Frame = AccordionFrame;
export default Accordion;
