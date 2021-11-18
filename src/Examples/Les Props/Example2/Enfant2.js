import React from "react";

const Enfant2 = ({ personne, job }) => {
	const { prenom, nom } = personne; //On peut aussi deconstruire "personne" et recupérer les keys "prenom" et "nom" dans des variables

	return (
		<p>
			Bonjour, je suis {prenom} {nom}, je suis {job}
		</p>
	);
};

export default Enfant2;
