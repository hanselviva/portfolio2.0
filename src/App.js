import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
//
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
			<BrowserRouter>
				<div className="App">
					<CssBaseline />

					<Home />
					<About />
					<Resume />
					<Projects />
					<ContactTemp />
				</div>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
