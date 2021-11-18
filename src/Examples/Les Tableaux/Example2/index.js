import React from "react";
import Personne from "./Personne";

const TableauxExample2 = () => {
	const monTableau = [
		{ prenom: "Jean", nom: "Castex" },
		{ prenom: "Jean-Luc", nom: "Melanchon" },
		{ prenom: "Xavier", nom: "Bertrand" },
	];

	return (
		<div>
			{monTableau.map((personne, index) => {
				return <Personne key={index} {...personne} />;
			})}
		</div>
	);
};

export default TableauxExample2;
