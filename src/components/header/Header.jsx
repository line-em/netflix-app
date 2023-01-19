import React from "react";
import { Link } from "react-router-dom";
import { Background, Container } from "./styles";

const Header = ({ bg = true, children, ...props }) => {
	return bg ? <Background {...props}>{children}</Background> : children;
};

const HeaderFrame = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};

const HeaderLogo = ({ to, ...props }) => {
	return (
		<Link to={to}>
			<Logo {...props} />
		</Link>
	);
};

Header.Frame = HeaderFrame;
Header.Logo = HeaderLogo;
export default Header;
