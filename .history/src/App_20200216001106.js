import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projecto from "../src/components/Projecto/Projecto";
import "./App.scss";
import Home from "../src/components/Home/Home";
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route  path="/projecto">
					<Projecto />
				</Route>

				<Route path
			</Switch>
		</Router>
	);
}

export default App;
