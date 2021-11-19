import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getLocalStorage = () => {
	let list = localStorage.getItem("list");
	if (list) {
		return JSON.parse(localStorage.getItem("list"));
	} else {
		return [];
	}
};

const LocalStorageExample1 = () => {
	const [todos, setTodos] = useState(getLocalStorage());
	const [todo, setTodo] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const checkTodo = todo;
		if (checkTodo.trim() === "") {
			setError("Ce champs ne peut pas être vide");
			return;
		}
		const newTodo = { id: new Date().getTime().toString(), content: todo };
		setTodos([...todos, newTodo]);
		setTodo("");
		setError("");
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id != id));
	};
	
	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(todos));
	}, [todos]);

	return (
		<div className="main">
			<div>
				<nav>
					<Link to="/">Accueil</Link>
				</nav>
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
							return (
								<div key={index}>
									<p>{todo.content}</p>
									<button onClick={() => deleteTodo(todo.id)}>supprimer</button>
								</div>
							);
						})}
				</div>
				<button onClick={() => setTodos([])}>Effecer les todos</button>
			</div>
		</div>
	);
};

export default LocalStorageExample1;
