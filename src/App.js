import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//
import Home from "./components/Home/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import ContactTemp from "./components/ContactTemp";
//

//
function App() {
	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;
