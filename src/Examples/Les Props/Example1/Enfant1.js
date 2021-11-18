import React from "react";

const Enfant1 = (props) => {
	return (
		<p>
			Bonjour, je suis {props.user.personne.prenom} {props.user.personne.nom}, je suis{" "}
			{props.user.job}
		</p>
	);
};

export default Enfant1;
