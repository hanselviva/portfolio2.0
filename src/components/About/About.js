import React from "react";
import Typed from "react-typed";
import aboutMe from "./aboutMe";
//
//
//
//

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
//
//
//

const useStyles = makeStyles((theme) => ({
	wrapper: {
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	mainContainer: {
		// background: `rgba(1, 11, 19, 0.9)`,
		color: theme.palette.secondary.main,
		// color: "white",
		minWidth: "90vw",
		maxWidth: "50vw",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	title: {
		color: theme.palette.secondary.light,
		padding: theme.spacing(1),
	},
	content: {
		textAlign: "center",
	},
	links: {
		marginTop: theme.spacing(1),
	},
}));

const About = () => {
	const classes = useStyles();
	return (
		<Box className={classes.wrapper} id="about">
			<Container className={classes.mainContainer}>
				<Typography className={classes.title} variant="h4">
					<Typed strings={["ABOUT"]} typeSpeed={40} />
				</Typography>

				<Typography className={classes.content} variant="h6">
					{aboutMe.biography} <br /> <br />
					{aboutMe.tools[0]} <br />
					{aboutMe.tools[1]} <br /> <br />
				</Typography>
			</Container>
		</Box>
	);
};

export default About;
