import React from "react";
import { Container, Text, Input, Button } from "./styles";

const OptForm = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};

const FormInput = ({ ...props }) => {
	return <Input {...props} />;
};

const FormButton = ({ children, ...props }) => {
	return (
		<Button {...props}>
			{children}
			<img src="/images/icons/chevron-right.png" alt="Try Now" />
		</Button>
	);
};

const FormText = ({ children, ...props }) => {
	return <Text {...props}>{children}</Text>;
};

OptForm.Input = FormInput;
OptForm.Button = FormButton;
OptForm.Text = FormText;
export default OptForm;
