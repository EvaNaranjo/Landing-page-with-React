import React from "react";
import "../../styles/index.css";
import Card from "./card.jsx";

const Container = () => {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</div>
			<div className="card-group">
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>
		</div>
	);
};

export default Container;
