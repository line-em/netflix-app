import Jumbotron from "./jumbotron";
import jumboData from "../../fixtures/jumbo.json";

const JumbotronContainer = () => {
	return (
		<Jumbotron.Container>
			{jumboData.map((item) => {
				<Jumbotron key={item.id} direction={item.direction}>
					<Jumbotron.Title>{item.title}</Jumbotron.Title>
					<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
					<Jumbotron.Image src={item.image} alt={item.alt} />
				</Jumbotron>;
			})}
		</Jumbotron.Container>
	);
};

export default JumbotronContainer;
