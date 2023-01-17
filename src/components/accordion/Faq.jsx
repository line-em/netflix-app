import React from "react";
import Accordion from "./Accordion";
import faqsData from "../../fixtures/faqs.json";

const FaqContainer = () => {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			<Accordion.Frame>
				{faqsData.map((item) => (
					<Accordion.Item key={item.id}>
						<Accordion.Header>{item.header}</Accordion.Header>
						<Accordion.Body>{item.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion.Frame>
		</Accordion>
	);
};

export default FaqContainer;
