import React from "react";
import Enfant2 from "./Enfant2";

const Parent2 = () => {
	const user = { personne: { prenom: "Jean", nom: "Castex" }, job: "Politicien" };

	return (
		<div>
            {/* Ici on passe le user dans les props en le decomposant grâce au "spread operator" (...) */}
			<Enfant2 {...user} />
		</div>
	);
};

export default Parent2;
