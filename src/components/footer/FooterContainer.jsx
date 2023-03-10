import React from "react";
import Footer from "./Footer";

const FooterContainer = () => {
	return (
		<Footer>
			<Footer.Title>Questions?</Footer.Title>
			<Footer.Break />
			<Footer.Row>
				<Footer.Column>
					<Footer.Link href="#">FAQs</Footer.Link>
					<Footer.Link href="#">Investor Relations</Footer.Link>
					<Footer.Link href="#">Ways to Watch</Footer.Link>
					<Footer.Link href="#">Corporate Information</Footer.Link>
					<Footer.Link href="#">Netflix Originals</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href="#">Help Centre</Footer.Link>
					<Footer.Link href="#">Jobs</Footer.Link>
					<Footer.Link href="#">Terms of Use</Footer.Link>
					<Footer.Link href="#">Corporate Information</Footer.Link>
					<Footer.Link href="#">Netflix Originals</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href="#">Media Centre</Footer.Link>
					<Footer.Link href="#">Redeem gift cards</Footer.Link>
					<Footer.Link href="#">Privacy</Footer.Link>
					<Footer.Link href="#">Speed Test</Footer.Link>
				</Footer.Column>
			</Footer.Row>
			<Footer.Text>Netflix</Footer.Text>
		</Footer>
	);
};

export default FooterContainer;
