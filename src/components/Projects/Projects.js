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
		name: "React Portfolio",
		image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
		description:
			"this.portfolio is a highly responsive website built with React.js, react-particles, Material-UI and react-parallax.",
		role: "Personal Project",
		demo: "https://hansel.xyz",
		code: "https://github.com/hanselviva/portfolio",
	},

	{
		name: "Water My Plants",
		image:
			"https://cdn.pixabay.com/photo/2018/03/02/09/19/flower-marigolds-3192686_960_720.png",
		description:
			"Built alongside a team of Lambda School Web Development students. 'Water My Plants' will remind users when it's time to water their plants. The app is complete from frontend to backend functionalities.",
		role: "Front-end, built the components with form management and validations",
		demo: "https://water-my-plants-tt157.vercel.app/",
		code: "https://github.com/Build-Week-Water-My-Plants-157",
	},
	{
		name: "Make-your-own Pizza",
		image:
			"https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285_960_720.png",
		description:
			"This is my first ever functioning web app deployed which is focus on React fundamentals and JS functions. This is complete from Form Management and Validation to routing, post requests, and even cypress testing. The basic styling is added for comprehensibility purposes.",
		role: "Personal Project",

		demo: "https://gallant-hopper-0e9073.netlify.app/",
		code: "https://github.com/hanselviva/pizza-eats",
	},
];

const useStyles = makeStyles((theme) => ({
	wrapper: {
		height: "auto",
		display: "flex",
		textAlign: "center",
		paddingTop: "10%",
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
		paddingTop: theme.spacing(4),
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
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		color: "#cfd8dc",
		padding: theme.spacing(4),
		minHeight: "70vh",
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
		<Container className={classes.wrapper} id="projects">
			<Container className={classes.mainContainer}>
				<Typography className={classes.title} variant="h4">
					<Typed strings={["PROJECTS"]} typeSpeed={40} />
				</Typography>

				<Grid container spacing={4} className={classes.cardGrid} maxWidth="md">
					{projects.map((card, i) => (
						<Grid item key={i} md={4} className={classes.cardWrapper}>
							<Parallax
								renderLayer={(percentage) => (
									<Card
										className={classes.card}
										style={{
											background: `rgba(58, 102, 120, ${percentage * 1})`,
										}}
									>
										<CardMedia
											className={classes.cardMedia}
											image={card.image}
										/>
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
			</Container>
		</Container>
	);
};

export default Projects;
