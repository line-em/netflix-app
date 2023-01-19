import React, { useState } from "react";
import Form from "../components/form/Form";
import HeaderContainer from "../components/header/HeaderContainer";

const Signin = () => {
	const [error, setError] = useState(true);
	return (
		<HeaderContainer>
			<Form>
				<Form.Title>Sign In</Form.Title>
				{error && <Form.Error />}
			</Form>
		</HeaderContainer>
	);
};

export default Signin;
