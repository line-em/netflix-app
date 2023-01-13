import React from "react";
import { Container, Item, Inner, Title, SubTitle, Image, Pane } from "./styles";

export default function Jumbotron({ children, direction = "row", ...props }) {
	return (
		<Item {...props}>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
}

Jumbotron.Container = function JumbotronContainer({ children, ...props }) {
	return <Container {...props}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...props }) {
	return <Title {...props}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...props }) {
	return <SubTitle {...props}>{children}</SubTitle>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...props }) {
	return <Pane {...props}>{children}</Pane>;
};

Jumbotron.Image = function JumbotronImage({ ...props }) {
	return <Image {...props} />;
};
