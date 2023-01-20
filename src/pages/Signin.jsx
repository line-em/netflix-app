import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import HeaderContainer from "../components/header/HeaderContainer";
import FooterContainer from "../components/footer/FooterContainer";
import { FirebaseContext } from "../context/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
	const navigate = useNavigate();
	const { auth } = useContext(FirebaseContext);
	const [error, setError] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const isInvalid = (password === "") | (emailAddress === "");

	const handleSignin = async (event) => {
		event.preventDefault();
		try {
			const response = await signInWithEmailAndPassword(auth, emailAddress, password);
			setEmailAddress("");
			setPassword("");
			setError("");
			setTimeout(() => {
				navigate("/browse", { replace: true });
			}, 1000);
			// return response.user;
		} catch (error) {
			console.log(error.message);
			return setError(error.message);
		}
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignin} method="POST">
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type="password"
							value={password}
							autoComplete="off"
							placeholder="Password"
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign In
						</Form.Submit>

						<Form.Text>
							New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
						</Form.Text>
						<Form.TextSmall>This page is protected by Google reCAPTCHA.</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};

export default Signin;
