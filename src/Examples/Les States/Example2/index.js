import React, { useState } from "react";
import Enfant from "./Enfant";

const StateExample2 = () => {
	const [magic, setMagic] = useState(false);

	const toggle = () => {
		setMagic(!magic);
	};

	return (
		<div>
			<h2>Je suis le composant parent</h2>
			{magic && <h3>Je suis controlé par le composant enfant</h3>}
			<Enfant maFonction={toggle} />
		</div>
	);
};

export default StateExample2;
