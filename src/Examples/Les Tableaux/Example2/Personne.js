import React from "react";

const Personne = ({ prenom, nom }) => {
	return (
		<p>
			Je suis {prenom} {nom}
		</p>
	);
};

export default Personne;
