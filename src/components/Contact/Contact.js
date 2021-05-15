import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
//
//

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
	motherContainer: {
		backgroundColor: "black",
	},
	title: {
		color: theme.palette.secondary.light,
		padding: theme.spacing(1),
	},
	mainContainer: {},
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

const Contact = () => {
	const classes = useStyles();
	return (
		<Box className={classes.mainContainer}>
			<Container className={classes.motherContainer} maxWidth="lg">
				<Typography className={classes.title} variant="h4">
					<Typed strings={["Contact"]} typeSpeed={40} />
				</Typography>

				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								className={classes.textField}
								autoComplete="fname"
								name="name"
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Name"
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								className={classes.textField}
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								className={classes.textField}
								variant="outlined"
								required
								fullWidth
								multiline
								rows={4}
								name="message"
								label="Message"
								id="message"
							/>
						</Grid>
					</Grid>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						endIcon={<Send />}
					>
						Send Message
					</Button>
				</form>

				<Grid className={classes.links} container spacing={2} justify="center">
					<Grid item>
						<Link to="/">
							<Button variant="contained" color="primary">
								Back to Home
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Contact;
