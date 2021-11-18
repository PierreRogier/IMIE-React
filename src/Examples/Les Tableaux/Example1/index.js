import React from "react";

const TableauxExample1 = () => {
	const monTableau = [
		{ prenom: "Jean", nom: "Castex" },
		{ prenom: "Jean-Luc", nom: "Melanchon" },
		{ prenom: "Xavier", nom: "Bertrand" },
	];

	return (
		<div>
			{monTableau.map((personne, index) => {
				{
					/* Il ne faut pas oublier de rajouter une "key" lorsque l'on map un tableau en react, ça permet à react d'identifier chaque itération */
				}
				return (
					<p key={index}>
						Je suis {personne.prenom} {personne.nom}
					</p>
				);
			})}
		</div>
	);
};

export default TableauxExample1;
