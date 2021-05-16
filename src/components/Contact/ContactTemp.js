import React from "react";
import Typed from "react-typed";
//
//

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";
import { Parallax } from "react-parallax";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	mainContainer: {
		// backgroundColor: "#34515e",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	title: {
		// color: theme.palette.secondary.light,
		padding: theme.spacing(1),
	},
	content: {
		color: theme.palette.secondary.main,
	},
	links: {
		marginTop: theme.spacing(6),
	},
	textField: {
		backgroundColor: theme.palette.secondary.light,
		color: theme.palette.secondary.light,
	},
	submit: {
		marginTop: theme.spacing(2),
	},
}));

const ContactTemp = () => {
	const classes = useStyles();
	return (
		<Box className={classes.wrapper}>
			<div id="contact" />
			<Parallax
				renderLayer={(percentage) => (
					<div>
						<Container
							className={classes.mainContainer}
							style={{
								background: `rgba(1, 11, 19, ${percentage * 1})`,
								borderRadius: "50%",
								width: percentage * 700,
								height: percentage * 700,
							}}
						>
							<div
								style={{
									color: `rgba(255, 255, 255, ${percentage * 1})`,
								}}
							>
								<Typography className={classes.title} variant="h4">
									<Typed strings={["CONTACT"]} typeSpeed={40} />
								</Typography>

								<Typography className={classes.title} variant="h6">
									Let's work together! Email me at: <br />
									<a
										rel="noreferrer"
										target="_blank"
										href="mailto:hanselviva@gmail.com"
										style={{ color: `rgba(255, 235, 205, ${percentage * 1})` }}
									>
										hanselviva@gmail.com{" "}
									</a>
								</Typography>
							</div>

							<Grid
								className={classes.links}
								container
								spacing={2}
								justify="center"
							>
								<Grid item>
									<a href="#home">
										<Button variant="contained" color="primary">
											<VerticalAlignTopIcon />
											Back to top
										</Button>
									</a>
								</Grid>
							</Grid>
						</Container>
					</div>
				)}
			></Parallax>
		</Box>
	);
};

export default ContactTemp;
