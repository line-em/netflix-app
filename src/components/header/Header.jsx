import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
	Background,
	Container,
	Logo,
	ButtonLink,
	Group,
	Link,
	Text,
	Feature,
	PlayButton,
	FeatureCallout,
	Search,
	SearchIcon,
	SearchInput,
	Picture,
	Profile,
	Dropdown
} from "./styles";

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

const HeaderFeature = ({ children, ...props }) => {
	return <Feature {...props}>{children}</Feature>;
};

const HeaderFeatureCallout = ({ children, ...props }) => {
	return <FeatureCallout {...props}>{children}</FeatureCallout>;
};

const HeaderPlayButton = ({ children, ...props }) => {
	return <PlayButton {...props}>{children}</PlayButton>;
};

const HeaderSearch = ({ searchTerm, setSearchTerm, ...props }) => {
	const [searchActive, setSearchActive] = useState(false);
	return (
		<Search {...props}>
			<SearchIcon onClick={() => setSearchActive(!searchActive)}>
				<img src="/images/icons/search.png" alt="Search" />
			</SearchIcon>
			<SearchInput
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				placeholder="Search films and series..."
				active={searchActive}
			></SearchInput>
		</Search>
	);
};

const HeaderPicture = ({ src, ...props }) => {
	return <Picture {...props} src={`/images/users/${src}.png`} />;
};

const HeaderDropdown = ({ children, ...props }) => {
	return <Dropdown {...props}>{children}</Dropdown>;
};

const HeaderProfile = ({ children, ...props }) => {
	return <Profile {...props}>{children}</Profile>;
};

Header.Frame = HeaderFrame;
Header.Text = HeaderText;
Header.Group = HeaderGroup;
Header.Logo = HeaderLogo;
Header.ButtonLink = HeaderButtonLink;
Header.Link = HeaderLink;
Header.FeatureCallout = HeaderFeatureCallout;
Header.Feature = HeaderFeature;
Header.PlayButton = HeaderPlayButton;
Header.Search = HeaderSearch;
Header.Picture = HeaderPicture;
Header.Dropdown = HeaderDropdown;
Header.Profile = HeaderProfile;

export default Header;
