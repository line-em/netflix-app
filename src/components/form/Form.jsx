import React from "react";
import { Container, Input, Base, Title, Text, TextSmall, Link, Submit, Error } from "./styles";

const Form = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};

const FormBase = ({ children, ...props }) => {
	return <Base {...props}>{children}</Base>;
};

const FormTitle = ({ children, ...props }) => {
	return <Title {...props}>{children}</Title>;
};

const FormText = ({ children, ...props }) => {
	return <Text {...props}>{children}</Text>;
};

const FormTextSmall = ({ children, ...props }) => {
	return <TextSmall {...props}>{children}</TextSmall>;
};

const FormLink = ({ children, ...props }) => {
	return <Link {...props}>{children}</Link>;
};

const FormInput = ({ children, ...props }) => {
	return <Input {...props}>{children}</Input>;
};

const FormSubmit = ({ children, ...props }) => {
	return <Submit {...props}>{children}</Submit>;
};
const FormError = ({ children, ...props }) => {
	return <Error {...props}>{children}</Error>;
};

Form.Input = FormInput;
Form.Base = FormBase;
Form.Title = FormTitle;
Form.Text = FormText;
Form.TextSmall = FormTextSmall;
Form.Link = FormLink;
Form.Submit = FormSubmit;
Form.Error = FormError;
export default Form;
