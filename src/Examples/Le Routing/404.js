import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div>
			<h1>Error Page</h1>
			<nav>
				<Link to="/">Accueil</Link>
			</nav>
		</div>
	);
};

export default ErrorPage;
