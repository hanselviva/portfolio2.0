import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import ContactTemp from "./components/Contact/ContactTemp";
//
//
import CssBaseline from "@material-ui/core/CssBaseline";
//
//
function App() {
	return (
		<React.Fragment>
			<div className="App">
				<CssBaseline />
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route exact path="/resume" component={Resume} />
						<Route exact path="/projects" component={Projects} />
						<Route exact path="/contact" component={ContactTemp} />
					</Switch>
				</BrowserRouter>
			</div>
		</React.Fragment>
	);
}

export default App;
