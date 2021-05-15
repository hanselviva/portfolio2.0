import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import aboutMe from "./aboutMe";
//
//

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		// backgroundColor: "#102027",
	},
	mainContainer: {
		height: "100vh",
		maxWidth: "50%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		color: theme.palette.secondary.main,
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

				<Typography className={classes.content} variant="body1">
					{/* <h4 style={{ color: "#e35183" }}> Biography:</h4> */}
					{aboutMe.biography} <br /> <br />
					{aboutMe.tools[0]} <br />
					{aboutMe.tools[1]} <br /> <br />
					{/* <h4 style={{ color: "#e35183" }}>Education:</h4> */}
					{/* {aboutMe.education} <br /> <br /> */}
					{/* <h4 style={{ color: "#e35183" }}>Career:</h4> */}
					{/* {aboutMe.career} <br /> <br /> */}
					{/* <h4 style={{ color: "#e35183" }}>Interests & Hobbies:</h4> */}
					{/* {aboutMe.interests_hobbies} */}
				</Typography>

				{/* <Grid className={classes.links} container spacing={2} justify="center">
					<Grid item>
						<Link to="/">
							<Button variant="contained" color="primary">
								Back to Home
							</Button>
						</Link>
					</Grid>
					<Grid item>
						<Link to="/resume">
							<Button variant="contained" color="primary">
								View Resume
							</Button>
						</Link>
					</Grid>
				</Grid> */}
			</Container>
		</Box>
	);
};

export default About;
