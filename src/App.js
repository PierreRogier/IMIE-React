import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

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
	Page2,
	ErrorPage,
} from "./Examples";

// Vous pouvez ajouter le composant de la partie qui vous interesse dans la div "main" pour voir ce que ça donne
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<h1>Tuto React / Javascript</h1>
								<nav>
									<Link to="/page2">Page 2</Link>
								</nav>
								<div className="main">
									<ApiCallExample1 />
								</div>
							</>
						}
					/>
					<Route path="/page2" element={<Page2 />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
