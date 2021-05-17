import React from "react";
import avatar from "./avatar.jpg";
import Typed from "react-typed";

//
//
import Particles from "react-particles-js";
import particlesParams from "../../ParticlesParams/particlesParams";
//
//
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
//
//
//

const useStyles = makeStyles((theme) => ({
	homeWrapper: {
		// backgroundColor: "#000a12",
		minWidth: "90vw",
	},
	homeContainer: {
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
		// color: "rgba(0,101,120,1)",
		padding: theme.spacing(1),
		// textTransform: "uppercase",
	},
	subtitle: {
		color: theme.palette.primary.light,
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
		<div
			id="home"
			className={classes.homeWrapper}
			style={{
				position: "relative",
				backgroundRepeat: "repeat",
				overflow: "hidden",
			}}
		>
			<Particles
				className="particles"
				height="100vh"
				width="100vw"
				params={particlesParams}
			/>

			<div className={classes.homeContainer}>
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
							<a href="#about">
								<Button variant="contained" color="primary">
									About
								</Button>
							</a>
						</Grid>
						<Grid item>
							<a href="#resume">
								<Button variant="contained" color="primary">
									Resume
								</Button>
							</a>
						</Grid>
						<Grid item>
							<a href="#projects">
								<Button variant="contained" color="primary">
									Projects
								</Button>
							</a>
						</Grid>
						<Grid item>
							<a href="#contact">
								<Button variant="contained" color="primary">
									Contact
								</Button>
							</a>
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
									<GitHubIcon />
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
									<LinkedInIcon />
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
									<TwitterIcon />
								</Button>
							</a>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
		// </div>
	);
};

export default Home;
