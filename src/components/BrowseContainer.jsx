import React, { useState } from "react";
import Header from "./header/Header";
import FooterContainer from "./footer/FooterContainer";
import { FirebaseContext } from "../context/firebase";
import ProfileContainer from "./profiles/ProfileContainer";

const BrowseContainer = () => {
	const [profile, setProfile] = useState({});

	const user = {
		displayName: "Karl",
		photoURL: "1"
	};
	return profile.displayName ? (
		<>
			<p>Browse Container</p>
			<FooterContainer />
		</>
	) : (
		<ProfileContainer user={user} setProfile={setProfile} />
	);
};

export default BrowseContainer;
