import React from "react";
import Header from "../header/Header";
import Profiles from "./Profile";

const ProfileContainer = ({ user, setProfile }) => {
	return (
		<>
			<Header bg={false}>
				<Header.Frame>
					<Header.Logo to="/" src="/images/misc/logo.svg" alt="Netflix" />
				</Header.Frame>
			</Header>
			<Profiles>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User
						onClick={() =>
							setProfile({
								displayName: user.displayName,
								photoURL: user.photoURL
							})
						}
					>
						<Profiles.Picture src={user.photoURL} />
						<Profiles.Name>{user.displayName}</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		</>
	);
};

export default ProfileContainer;
