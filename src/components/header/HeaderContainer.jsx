import React from "react";
import Header from "./Header";

const HeaderContainer = ({ children }) => {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo to="/" src="/images/misc/logo.svg" alt="Netflix" />
				<Header.ButtonLink to="/signin">Sign In</Header.ButtonLink>
			</Header.Frame>
			{children}
		</Header>
	);
};

export default HeaderContainer;
