import React, { useState } from "react";

const FormulairesExample1 = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todo === "") {
			setError("Ce champs ne peut pas être vide");
			return;
		}
		setTodos([...todos, todo]);
		setTodo("");
		setError("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<p className="error">{error}</p>
				<div className="form-control">
					<label htmlFor="todoForm">todo :</label>
					<input
						type="text"
						name="todoForm"
						id="todoForm"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
					/>
				</div>
				<button type="submit">Valider</button>
			</form>
			<div>
				<h3>Mes todos :</h3>
				{todos &&
					todos.map((todo, index) => {
						return <p key={index}>{todo}</p>;
					})}
			</div>
		</div>
	);
};

export default FormulairesExample1;
