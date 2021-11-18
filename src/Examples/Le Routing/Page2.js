import React from "react";
import { Link } from "react-router-dom";
import { FormulairesExample1 } from "../index";

const Page2 = () => {
	return (
		<div>
			<h1>Page 2</h1>
			<nav>
				<Link to="/">Accueil</Link>
			</nav>
			<div className="main">
				<FormulairesExample1 />
			</div>
		</div>
	);
};

export default Page2;
