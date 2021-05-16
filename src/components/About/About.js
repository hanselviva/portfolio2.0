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

import htmlImg from "./html1.png";
import cssImg from "./css2.png";
import jsImg from "./js2.png";
import { Card, CardMedia, Grid } from "@material-ui/core";
import { Parallax } from "react-parallax";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	mainContainer: {
		color: theme.palette.secondary.main,
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
	mediaContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "25vw",
	},
	// media: {
	// 	height: "200px",
	// 	width: "150px",
	// },
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

			<Parallax
				renderLayer={(percentage) => (
					<Container className={classes.mediaContainer}>
						<CardMedia
							className={classes.media}
							image={htmlImg}
							style={{
								height: `${percentage * 150}px`,
								width: "100px",
								// width: `${percentage * 100}px`,
								opacity: `${percentage * 1.5}`,
							}}
						/>
						<CardMedia
							image={cssImg}
							style={{
								height: `${percentage * 150}px`,
								width: "100px",
								// width: `${percentage * 100}px`,
								opacity: `${percentage * 1.5}`,
							}}
						/>
						<CardMedia
							image={jsImg}
							style={{
								height: `${percentage * 150}px`,
								width: "100px",
								// width: `${percentage * 100}px`,
								opacity: `${percentage * 1.5}`,
							}}
						/>
					</Container>
				)}
			></Parallax>
		</Box>
	);
};

export default About;
