import React from "react";
import Card from "./card.jsx";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="card-container">
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>
		</div>
	);
};

export default Home;
