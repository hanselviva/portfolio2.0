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
import projects from "./projectList";

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
		alignItems: "flex-end",
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
