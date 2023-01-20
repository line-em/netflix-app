import React, { useState, useContext } from "react";
import Header from "./header/Header";
import FooterContainer from "./footer/FooterContainer";
import { FirebaseContext } from "../context/firebase";
import ProfileContainer from "./profiles/ProfileContainer";

const BrowseContainer = () => {
	const [category, setCategory] = useState("series");
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);

	const { firebase } = useContext(FirebaseContext);

	const user = {
		displayName: "Karl",
		photoURL: "1"
	};

	return profile.displayName ? (
		<>
			<Header src="joker1" dontShowOnSmallViewPort>
				<Header.Frame>
					<Header.Group>
						<Header.Logo to="/" src="/images/misc/logo.svg" alt="Netflix" />
						<Header.Link
							active={category === "series" ? "true" : "false"}
							onClick={() => setCategory("series")}
						>
							Series
						</Header.Link>
						<Header.Link
							active={category === "films" ? "true" : "false"}
							onClick={() => setCategory("films")}
						>
							Films
						</Header.Link>
					</Header.Group>
				</Header.Frame>
			</Header>
			<FooterContainer />
		</>
	) : (
		<ProfileContainer user={user} setProfile={setProfile} />
	);
};

export default BrowseContainer;
