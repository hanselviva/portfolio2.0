import React from "react";
import Typed from "react-typed";
//
//

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//
import { Parallax } from "react-parallax";
//
//

const projects = [
	{
		name: "Rent-A-Game",
		image: "https://i.ibb.co/XpF72td/Screenshot-7.png",
		description:
			"A fully functional rental store built on React with Redux state management. This app has also client authentication using Axios. The database API is pulled from FreeToGame.com which I have tweaked to cater the needs of the app.",
		role: "Personal Project",
		demo: "https://store-app-mu.vercel.app/",
		code: "https://github.com/hanselviva/react-async-redux",
		tools: "React, Redux, Redux Thunk, Material-UI, more..",
	},
	{
		name: "Water My Plants",
		image:
			"https://cdn.pixabay.com/photo/2018/03/02/09/19/flower-marigolds-3192686_960_720.png",
		description:
			"Built alongside a team of Lambda School WebDev students in an AGILE environment. 'Water My Plants' reminds users to water their plants. The app is complete from frontend to backend functionalities.",
		role: "Front-end; form validation, components styling & functionalities",
		demo: "https://water-my-plants-tt157.vercel.app/",
		code: "https://github.com/Build-Week-Water-My-Plants-157",
		tools: "React, Redux, Axios, Material-UI, react-router-dom, Yup",
	},
	{
		name: "Make-your-own Pizza",
		image:
			"https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285_960_720.png",
		description:
			"My first ever deployment, complete Form Management from validation to routing, post requests, and Cypress testing. Basic styling is added only for comprehensibility.",
		role: "Personal Project",

		demo: "https://gallant-hopper-0e9073.netlify.app/",
		code: "https://github.com/hanselviva/pizza-eats",
		tools: "React, Axios, react-router-dom, Yup, Cypress",
	},
	{
		name: "React Portfolio",
		image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
		description:
			"this.portfolio is a highly responsive website built with React.js, react-particles, Material-UI and react-parallax.",
		role: "Personal Project",
		demo: "https://hansel.xyz",
		code: "https://github.com/hanselviva/portfolio2.0",
		tools: "React, react-particles, Material-UI, react-parallax",
	},
	{
		name: "Simple React Calculator",
		image: "https://i.ibb.co/SK38Xnj/Screenshot-5.png",
		description: "Simple React calculator using actions and reducers",
		role: "Personal Project",
		demo: "https://reducer-calculator.netlify.app/",
		code: "https://github.com/hanselviva/react-calculator",
		tools: "React with actions and reducers",
	},
	{
		name: "Jokes Generator",
		image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
		description: "Simple App using react that handles async using redux-thunk.",
		role: "Personal Project",
		demo: "https://async-redux-chuck-norris-jokes.netlify.app/",
		code: "https://github.com/hanselviva/react-async-redux",
		tools: "React, Redux Thunk",
	},
];

const useStyles = makeStyles((theme) => ({
	wrapper: {
		height: "auto",
		display: "flex",
		textAlign: "center",
		paddingTop: theme.spacing(8),
		minWidth: "90vw",
		alignItems: "center",
		justifyContent: "center",
	},
	mainContainer: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: "5%",
	},
	title: {
		color: theme.palette.secondary.light,
		// paddingTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		color: "#cfd8dc",
		padding: theme.spacing(4),
		// minHeight: "67vh",
	},
	cardMedia: {
		paddingTop: "56.25%", // 16:9
	},
	cardContent: {
		flexGrow: 1,
		textAlign: "left",
		// color: "#FFEBCD",
		color: theme.palette.secondary.main,
		// color: "#102027",
	},
	cardContentDesc: {
		marginTop: theme.spacing(1),
	},
	links: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(10),
	},
	gridRoot: {
		flexGrow: 1,
	},
}));

const Projects = () => {
	const classes = useStyles();
	return (
		<Container className={classes.wrapper} id="projects">
			<Container className={classes.mainContainer}>
				<Typography className={classes.title} variant="h4">
					<Typed strings={["PROJECTS"]} typeSpeed={40} />
				</Typography>

				<div className={classes.gridRoot}>
					<Grid container spacing={6} className={classes.cardGrid}>
						{/* <Grid container spacing={4} className={classes.cardGrid} maxWidth="md"> */}

						{projects.map((card, i) => (
							<Grid item key={i} md={4} className={classes.cardWrapper}>
								<Parallax
									renderLayer={(percentage) => (
										<Card
											className={classes.card}
											style={{
												background: `rgba(
												0,
												${percentage * 101},
												${percentage * 120}, ${percentage * 1})`,
											}}
										>
											<CardMedia
												className={classes.cardMedia}
												image={card.image}
												style={{ opacity: `${percentage * 1}` }}
											/>
											<CardContent className={classes.cardContent}>
												<Typography gutterBottom variant="h5" component="h2">
													{card.name}
												</Typography>
												<Typography className={classes.cardContentDesc}>
													<b> Role: </b> {card.role} <br />
												</Typography>
												<Typography className={classes.cardContentDesc}>
													<b> Description: </b> {card.description}
												</Typography>
												<Typography className={classes.cardContentDesc}>
													<b> Tools: </b> {card.tools} <br />
												</Typography>
											</CardContent>
											<CardActions>
												<a rel="noreferrer" target="_blank" href={card.demo}>
													<Button
														size="small"
														color="primary"
														variant="contained"
													>
														Demo
													</Button>
												</a>

												<a rel="noreferrer" target="_blank" href={card.code}>
													<Button
														size="small"
														color="primary"
														variant="contained"
													>
														View Code
													</Button>
												</a>
											</CardActions>
										</Card>
									)}
								></Parallax>
							</Grid>
						))}
					</Grid>
				</div>
			</Container>
		</Container>
	);
};

export default Projects;
