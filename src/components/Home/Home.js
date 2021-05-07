import React from "react";
import avatar from "./avatar.jpg";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import "./home.css";
//
//
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
//
import Particles from "react-particles-js";
import particlesParams from "../../ParticlesParams/particlesParams";
//
//
const useStyles = makeStyles((theme) => ({
	componentContainer: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		width: "auto",
		textAlign: "center",
	},
	avatar: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		margin: theme.spacing(1),
	},
	title: {
		color: theme.palette.secondary.light,
		padding: theme.spacing(1),
	},
	subtitle: {
		color: theme.palette.primary.light,
		// textTransform: "uppercase",
	},
	linksContainer: {
		marginTop: theme.spacing(1),
	},
}));
//
//
const Home = () => {
	const classes = useStyles();
	return (
		<div className="componentParticlesWrapper">
			<Particles
				className="particlesCanvassWrapper"
				canvasClassName="particlesCanvass"
				params={particlesParams}
			/>

			<Box className="componentContainer">
				<Grid container justify="center">
					<Avatar className={classes.avatar} src={avatar} />
				</Grid>

				<Container>
					<Typography className={classes.title} variant="h4">
						<Typed strings={["Hansel Valentine"]} typeSpeed={40} />
					</Typography>

					<Typography className={classes.subtitle} variant="h5">
						<Typed
							strings={["HTML/CSS/JavaScript", "React.js", "Git/Github"]}
							typeSpeed={40}
							backSpeed={50}
							loop
						/>
					</Typography>
					<Grid
						className={classes.linksContainer}
						container
						spacing={2}
						justify="center"
					>
						<Grid item>
							<Button variant="contained" color="primary">
								About
							</Button>
						</Grid>
						<Grid item>
							<Button variant="contained" color="primary">
								Resume
							</Button>
						</Grid>
						<Grid item>
							<Button variant="contained" color="primary">
								Projects
							</Button>
						</Grid>
						<Grid item>
							<Button variant="contained" color="primary">
								Contact
							</Button>
						</Grid>
					</Grid>

					<Grid container spacing={2} justify="center">
						<Grid item>
							<a
								rel="noreferrer"
								target="_blank"
								href="https://github.com/hanselviva"
							>
								<Button variant="outlined" color="primary">
									Github
								</Button>
							</a>
						</Grid>
						<Grid item>
							<a
								rel="noreferrer"
								target="_blank"
								href="https://www.linkedin.com/in/hanselvalentine/"
							>
								<Button variant="outlined" color="primary">
									LinkedIn
								</Button>
							</a>
						</Grid>

						<Grid item>
							<a
								rel="noreferrer"
								target="_blank"
								href="https://twitter.com/Hanselasdfghjkl"
							>
								<Button variant="outlined" color="primary">
									Twitter
								</Button>
							</a>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
	);
};

export default Home;
