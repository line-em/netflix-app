import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink, Group, Link, Text } from "./styles";

const Header = ({ bg = true, children, ...props }) => {
	return bg ? <Background {...props}>{children}</Background> : children;
};

const HeaderFrame = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};

const HeaderGroup = ({ children, ...props }) => {
	return <Group {...props}>{children}</Group>;
};

const HeaderLogo = ({ to, ...props }) => {
	return (
		<ReactRouterLink to={to}>
			<Logo {...props} />
		</ReactRouterLink>
	);
};

const HeaderText = ({ children, ...props }) => {
	return <Text {...props}>{children}</Text>;
};

const HeaderButtonLink = ({ children, ...props }) => {
	return <ButtonLink {...props}>{children}</ButtonLink>;
};

const HeaderLink = ({ children, ...props }) => {
	return <Link {...props}>{children}</Link>;
};

Header.Frame = HeaderFrame;
Header.Text = HeaderText;
Header.Group = HeaderGroup;
Header.Logo = HeaderLogo;
Header.ButtonLink = HeaderButtonLink;
Header.Link = HeaderLink;
export default Header;
