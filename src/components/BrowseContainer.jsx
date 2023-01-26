import React, { useState, useContext, useEffect } from "react";
import Header from "./header/Header";
import FooterContainer from "./footer/FooterContainer";
import ProfileContainer from "./profiles/ProfileContainer";
import { FirebaseContext } from "../context/firebase";
import { signOut } from "firebase/auth";
import Loading from "./loading/Loading";

const BrowseContainer = () => {
	const [category, setCategory] = useState("series");
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");

	const { auth } = useContext(FirebaseContext);

	const user = {
		displayName: "Karl",
		photoURL: "1"
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [user]);

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
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
					<Header.Group>
						<Header.Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>
						<Header.Profile>
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Header.Link>{user.displayName}</Header.Link>
								</Header.Group>
								<Header.Group>
									<Header.Link
										onClick={() => {
											console.log(auth);
											signOut(auth);
										}}
									>
										Sign out
									</Header.Link>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>
				<Header.Feature>
					<Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
					<Header.Text>
						Forever alone in a crowd, failed comedian Arthur Fleck seeks
						connection as he walks the streets of Gotham City. Arthur wears
						two masks -- the one he paints for his day job as a clown, and the
						guise he projects in a futile attempt to feel like he's part of
						the world around him.
					</Header.Text>
				</Header.Feature>
				<Header.PlayButton>Play</Header.PlayButton>
			</Header>
			<FooterContainer />
		</>
	) : (
		<ProfileContainer user={user} setProfile={setProfile} />
	);
};

export default BrowseContainer;
