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
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	mainContainer: {
		// backgroundColor: "#34515e",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		position: "relative",
	},
	title: {
		color: "white",
		padding: theme.spacing(1),
	},
	links: {
		marginTop: theme.spacing(6),
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
						<div
							style={{
								background: `rgba(0, 0, 0, ${percentage * 1})`,
								position: "absolute",
								borderRadius: "50%",
								left: "50%",
								top: "50%",
								transform: "translate(-50%,-50%)",
								width: percentage * 600,
								height: percentage * 600,
							}}
						/>

						<Container className={classes.mainContainer}>
							<Typography className={classes.title} variant="h4">
								<Typed strings={["CONTACT"]} typeSpeed={40} />
							</Typography>

							<Typography className={classes.title} variant="h6">
								Let's work together! Email me at: <br />
								<a
									rel="noreferrer"
									target="_blank"
									href="mailto:hanselviva@gmail.com"
								>
									hanselviva@gmail.com{" "}
								</a>
							</Typography>

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
