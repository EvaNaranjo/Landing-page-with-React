import React from "react";
import "../../styles/index.css";

const Card = () => {
	return (
		<div className="card">
			<div className="image-card">
				<img
					src="..."
					className="card-img-top"
					className="img-fluid"
					alt="..."
				/>
			</div>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
			</div>
			<div className="card-bottom">
				<a href="#" className="btn btn-primary">
					Find Out More!{" "}
				</a>
			</div>
		</div>
	);
};

export default Card;
