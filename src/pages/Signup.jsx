import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import HeaderContainer from "../components/header/HeaderContainer";
import FooterContainer from "../components/footer/FooterContainer";
import { FirebaseContext } from "../context/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Signup = () => {
	const navigate = useNavigate();
	const { auth } = useContext(FirebaseContext);
	const [firstName, setFirstName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isInvalid = firstName === "" || password === "" || emailAddress === "";

	const handleSignup = async (event) => {
		event.preventDefault();
		try {
			const response = await createUserWithEmailAndPassword(auth, emailAddress, password);
			await updateProfile(auth.currentUser, {
				displayName: firstName,
				photoURL: Math.floor(Math.random() * 5) + 1
			});
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
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignup} method="POST">
						<Form.Input
							placeholder="First Name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<Form.Input
							placeholder="Email Address"
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
							Sign Up
						</Form.Submit>

						<Form.Text>
							Already a user? <Form.Link to="/signin">Sign up now.</Form.Link>
						</Form.Text>
						<Form.TextSmall>This page is protected by Google reCAPTCHA.</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};

export default Signup;
