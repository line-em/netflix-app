import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles";

const Header = ({ bg = true, children, ...props }) => {
	return bg ? <Background {...props}>{children}</Background> : children;
};

const HeaderFrame = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};

const HeaderLogo = ({ to, ...props }) => {
	return (
		<ReactRouterLink to={to}>
			<Logo {...props} />
		</ReactRouterLink>
	);
};
const HeaderButtonLink = ({ children, ...props }) => {
	return <ButtonLink {...props}>{children}</ButtonLink>;
};

Header.Frame = HeaderFrame;
Header.Logo = HeaderLogo;
Header.ButtonLink = HeaderButtonLink;
export default Header;
