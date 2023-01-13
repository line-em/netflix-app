import React from "react";
import { Container, Row, Column, Link, Title, Break, Text } from "./styles";

const Footer = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};

const FooterRow = ({ children, ...props }) => {
	return <Row {...props}>{children}</Row>;
};

const FooterColumn = ({ children, ...props }) => {
	return <Column {...props}>{children}</Column>;
};

const FooterLink = ({ children, ...props }) => {
	return <Link {...props}>{children}</Link>;
};

const FooterTitle = ({ children, ...props }) => {
	return <Title {...props}>{children}</Title>;
};

const FooterBreak = ({ children, ...props }) => {
	return <Break {...props}>{children}</Break>;
};

const FooterText = ({ children, ...props }) => {
	return <Text {...props}>{children}</Text>;
};

Footer.Row = FooterRow;
Footer.Column = FooterColumn;
Footer.Link = FooterLink;
Footer.Title = FooterTitle;
Footer.Break = FooterBreak;
Footer.Text = FooterText;

export default Footer;
