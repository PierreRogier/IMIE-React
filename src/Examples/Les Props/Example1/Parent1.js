import React from "react";
import Enfant1 from "./Enfant1";

const Parent1 = () => {
	const user = { personne: { prenom: "Jean", nom: "Castex" }, job: "Politicien" };

	return (
		<div>
			<Enfant1 user={user} />
		</div>
	);
};

export default Parent1;
