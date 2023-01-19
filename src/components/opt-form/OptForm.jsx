import React from "react";
import { Container, Text, Input, Button } from "./styles";

const ToggleContext = createContext();

const OptForm = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};

const Input = ({ ...props }) => {
	return <Input {...props} />;
};

const Button = ({ children, ...props }) => {
	return (
		<Button {...props}>
			{children}
			<img src="/images/icons/chevron-right.png" alt="Try Now" />
		</Button>
	);
};

const Text = ({ children, ...props }) => {
	return <Text {...props}>{children}</Text>;
};

OptForm.Input = Input;
OptForm.Button = Button;
OptForm.Text = Text;
export default OptForm;
