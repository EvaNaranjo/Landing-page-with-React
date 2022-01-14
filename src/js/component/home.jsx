import React from "react";
import Card from "./card.jsx";
import Container from "./container.jsx";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Container></Container>
		</div>
	);
};

export default Home;
