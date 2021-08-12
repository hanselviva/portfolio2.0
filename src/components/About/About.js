import React from "react";
import Typed from "react-typed";
import aboutMe from "./aboutMe";
//
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
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
	aboutContent: {
		position: "relative",
		textAlign: "center",
		paddingTop: theme.spacing(6),
		padding: theme.spacing(3),
	},
	moreAbout: {
		textAlign: "center",
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
	},
	mediaContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		paddingTop: theme.spacing(3),
	},
	media: {
		margin: theme.spacing(1),
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

				<Parallax
					strength={300}
					renderLayer={(percentage) => (
						<div>
							<div
								style={{
									background: `rgba(0,
												${percentage * 101},
												${percentage * 120}, ${percentage * 1})`,
									position: "absolute",
									left: "50%",
									top: "50%",
									transform: "translate(-50%,-50%)",
									width: percentage * 2500,
									height: percentage * 700,
								}}
							/>

							<Typography className={classes.aboutContent} variant="h6">
								{aboutMe.biography[0]} <br /> <br /> {aboutMe.biography[1]}{" "}
								<br />
								<br />
								{aboutMe.biography[2]} <br />
								{aboutMe.tools[0]} <br />
								{aboutMe.tools[1]} <br />
							</Typography>
						</div>
					)}
				/>
			</Container>
		</Box>
	);
};

export default About;
