// Voici les différents composants correspondant aux exemples
import { PropsExample1, PropsExample2 } from "./Examples";

// Vous pouvez ajouter le composant de la partie qui vous interesse dans la div "main" pour voir ce que ça donne

function App() {
	return (
		<div className="app">
			<h1>Tuto React / Javascript</h1>
			<div className="main">
				<PropsExample2 />
			</div>
		</div>
	);
}

export default App;
