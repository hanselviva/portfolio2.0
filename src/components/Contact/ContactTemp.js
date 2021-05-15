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

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		// backgroundColor: "#34515e",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	title: {
		color: theme.palette.secondary.light,
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
		<Box className={classes.mainContainer} id="contactTemp">
			<Container maxWidth="lg">
				<Typography className={classes.title} variant="h4">
					<Typed strings={["CONTACT"]} typeSpeed={40} />
				</Typography>

				<Container>
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
				</Container>

				<Grid className={classes.links} container spacing={2} justify="center">
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
		</Box>
	);
};

export default ContactTemp;
