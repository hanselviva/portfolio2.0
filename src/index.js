import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ParallaxProvider } from "react-scroll-parallax";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#ad1457",
			light: "#e35183",
			dark: "#78002e",
			// contrastText: "",
		},
		secondary: {
			main: "#b0bec5",
			light: "#e2f1f8",
			dark: "#808e95",
			// contrastText: "",
		},
	},
	typography: {
		fontFamily: [" Tahoma "],
	},
});

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<ParallaxProvider>
			<App />
		</ParallaxProvider>
	</ThemeProvider>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
