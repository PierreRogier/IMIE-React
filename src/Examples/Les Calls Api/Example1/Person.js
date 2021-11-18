import React from "react";

const Person = ({ person }) => {
	const {
		name: { title, first, last },
		picture: { thumbnail },
		location: { city, country },
	} = person;
	console.log(person);
	return (
		<div>
			<div className="person">
				<img src={thumbnail} alt={last} />
				<h3>
					{title} {first} {last}
				</h3>
			</div>
			<p>
				Ma ville : {city} | Mon Pays : {country}
			</p>
		</div>
	);
};

export default Person;
