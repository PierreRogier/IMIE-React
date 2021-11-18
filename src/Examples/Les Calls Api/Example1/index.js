import React, { useState, useEffect } from "react";
import Person from "./Person";

const ApiCallExample1 = () => {
	const [randomPerson, setRandomPerson] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [fetchError, setFetchError] = useState(null);

	const fetchRandomUser = async () => {
		try {
			setIsLoading(true);
			const res = await fetch("https://randomuser.me/api/");
			const data = await res.json();
			setRandomPerson(data);
			setIsLoading(false);
			setFetchError(null);
		} catch (error) {
			console.log(error);
			setFetchError("Une erreur est survenue");
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchRandomUser();
	}, []);

	if (isLoading) {
		return <h3>Loading...</h3>;
	}

	if (fetchError) {
		return <h3>{fetchError}</h3>;
	}

	return (
		<div>
			<h2>Random User</h2>
			<div className="randomContainer">
                {randomPerson && <Person person={randomPerson?.results[0]}/>}
            </div>
			<button onClick={fetchRandomUser}>Générer une autre personne</button>
		</div>
	);
};

export default ApiCallExample1;
