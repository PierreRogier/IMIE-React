import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
	return (
		<div>
			<h1>Page 2</h1>
			<nav>
				<Link to="/">Accueil</Link>
			</nav>
		</div>
	);
};

export default Page2;
