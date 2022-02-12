import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark p-4">
			<div className="container-fluid  d-flex flex-row justify-content-between">
				<span className="navbar-brand mb-0 h1">Start Bootstrap</span>
				<div id="navbar-buttons">
					<a className="navigation-links" href="#">
						Home
					</a>
					<a className="navigation-links" href="#">
						About
					</a>
					<a className="navigation-links" href="#">
						Services
					</a>
					<a className="navigation-links" href="#">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
