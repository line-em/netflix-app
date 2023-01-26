import React, { useState, useContext, createContext } from "react";
import {
	Container,
	Group,
	Title,
	SubTitle,
	Text,
	Feature,
	FeatureTitle,
	FeatureText,
	FeatureClose,
	Maturity,
	Content,
	Meta,
	Entities,
	Item,
	Image
} from "./styles";

const FeatureContext = createContext();

const Card = ({ children, ...props }) => {
	const [showFeature, setShowFeature] = useState(false);
	const [itemFeature, setItemFeature] = useState(false);
	return (
		<FeatureContext.Provider
			value={{
				showFeature,
				setShowFeature,
				itemFeature,
				setItemFeature
			}}
		>
			<Container {...props}>{children}</Container>
		</FeatureContext.Provider>
	);
};

const CardGroup = ({ children, ...props }) => {
	return <Group {...props}>{children}</Group>;
};

const CardTitle = ({ children, ...props }) => {
	return <Title {...props}>{children}</Title>;
};

const CardText = ({ children, ...props }) => {
	return <Text {...props}>{children}</Text>;
};

const CardSubTitle = ({ children, ...props }) => {
	return <SubTitle {...props}>{children}</SubTitle>;
};

const CardEntities = ({ children, ...props }) => {
	return <Entities {...props}>{children}</Entities>;
};
const CardMeta = ({ children, ...props }) => {
	return <Meta {...props}>{children}</Meta>;
};
const CardItem = ({ item, children, ...props }) => {
	const { setShowFeature, setItemFeature } = useContext(FeatureContext);
	return (
		<Item
			onClick={() => {
				setItemFeature(item);
				setShowFeature(true);
			}}
			{...props}
		>
			{children}
		</Item>
	);
};
const CardImage = ({ children, ...props }) => {
	return <Image {...props}>{children}</Image>;
};
const CardFeature = ({ category, children, ...props }) => {
	const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

	return showFeature ? (
		<Feature
			src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
		>
			<Content>
				<FeatureTitle>{itemFeature.title}</FeatureTitle>
				<FeatureText>{itemFeature.description}</FeatureText>
				<FeatureClose onClick={() => setShowFeature(false)}>
					<img src="/images/icons/close.png" alt="Close" />
				</FeatureClose>

				<Group margin="30px 0" flexDirection="row" alignItems="center">
					<Maturity rating={itemFeature.maturity}>
						{itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
					</Maturity>
					<FeatureText fontWeight="bold">
						{itemFeature.genre.charAt(0).toUpperCase() +
							itemFeature.genre.slice(1)}
					</FeatureText>
				</Group>

				{children}
			</Content>
		</Feature>
	) : null;
};

Card.Group = CardGroup;
Card.Title = CardTitle;
Card.Text = CardText;
Card.SubTitle = CardSubTitle;
Card.Meta = CardMeta;
Card.Item = CardItem;
Card.Entities = CardEntities;
Card.Image = CardImage;
Card.Feature = CardFeature;
export default Card;
