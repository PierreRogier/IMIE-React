// Voici les différents composants correspondant aux exemples

import {
	PropsExample1,
	PropsExample2,
	TableauxExample1,
	TableauxExample2,
	StateExample1,
	StateExample2,
	FormulairesExample1,
	ApiCallExample1,
} from "./Examples";

// Vous pouvez ajouter le composant de la partie qui vous interesse dans la div "main" pour voir ce que ça donne
function App() {
	return (
		<div className="app">
			<h1>Tuto React / Javascript</h1>
			<div className="main">
				<ApiCallExample1 />
			</div>
		</div>
	);
}

export default App;
