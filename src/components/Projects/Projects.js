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
import Box from "@material-ui/core/Box";

const projects = [
	{
		name: "Make-your-own Pizza",
		image:
			"https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_960_720.jpg",
		description:
			"This is my first ever functioning web app deployed which is focus on React fundamentals and JS functions. This is complete from Form Management and Validation to routing, post requests, and even cypress testing. The basic styling is added for comprehensibility purposes.",
		role: "Personal Project",

		demo: "https://gallant-hopper-0e9073.netlify.app/",
		code: "https://github.com/hanselviva/pizza-eats",
	},
	{
		name: "Water My Plants",
		image:
			"https://cdn.pixabay.com/photo/2018/06/12/09/19/plant-3470173_960_720.jpg",
		description:
			"Built alongside a team of Lambda School Web Development students. 'Water My Plants' will remind users when it's time to water their plants. The app is complete from frontend to backend functionalities.",
		role: "Front-end, built the components with form management and validations",
		demo: "https://water-my-plants-tt157.vercel.app/",
		code: "https://github.com/Build-Week-Water-My-Plants-157",
	},
	{
		name: "React Portfolio",
		image: "https://reactjs.org/logo-og.png",
		description: "this.portfolio is built with React.js and Material-UI",
		role: "Personal Project",
		demo: "https://hansel.xyz",
		code: "https://github.com/hanselviva/portfolio",
	},
];

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		height: "auto",
		display: "flex",
		textAlign: "center",
		// backgroundColor: "#29434e",
		paddingTop: "10%",
	},
	title: {
		color: theme.palette.secondary.light,
		padding: theme.spacing(1),
	},
	content: {
		color: theme.palette.secondary.main,
	},
	links: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(10),
	},
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		display: "flex",
		flexDirection: "row",
	},
	cardContainer: {
		maxWidth: "30%",
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	cardMedia: {
		paddingTop: "56.25%", // 16:9
	},
	cardContent: {
		flexGrow: 1,
		textAlign: "left",
	},
}));

const Projects = () => {
	const classes = useStyles();
	return (
		<Box className={classes.mainContainer} id="projects">
			<Container maxWidth="lg">
				<Typography className={classes.title} variant="h4">
					<Typed strings={["PROJECTS"]} typeSpeed={40} />
				</Typography>

				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={4}>
						{projects.map((card, i) => (
							<Grid item key={i} md={6}>
								<Card className={classes.card}>
									<CardMedia className={classes.cardMedia} image={card.image} />
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant="h5" component="h2">
											{card.name}
										</Typography>
										<Typography>
											<b> Role: </b> {card.role} <br />
											<b> Description: </b> {card.description}
										</Typography>
									</CardContent>
									<CardActions>
										<a rel="noreferrer" target="_blank" href={card.demo}>
											<Button size="small" color="primary" variant="outlined">
												Demo
											</Button>
										</a>

										<a rel="noreferrer" target="_blank" href={card.code}>
											<Button size="small" color="primary" variant="outlined">
												View Code
											</Button>
										</a>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>

				{/* <Grid className={classes.links} container spacing={2} justify="center">
					<Grid item>
						<Link to="/">
							<Button variant="contained" color="primary">
								Back to Home
							</Button>
						</Link>
					</Grid>

					<Grid item>
						<Link to="/contact">
							<Button variant="contained" color="primary">
								Contact Me
							</Button>
						</Link>
					</Grid>
				</Grid> */}
			</Container>
		</Box>
	);
};

export default Projects;
