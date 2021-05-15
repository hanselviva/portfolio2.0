import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

//
//
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		// backgroundColor: "#1c313a",
		overflow: "hidden",
	},
	timeLine: {
		position: "relative",
		padding: "1rem",
		margin: "o auto",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "100%",
			border: "1px solid #e35183",
			right: "40px",
			top: 0,
		},
		"&:after": {
			content: "''",
			display: "table",
			clear: "both",
		},
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			"&:before": {
				left: "calc(50% - 1px)",
				right: "auto",
			},
		},
	},
	timeLineItem: {
		padding: "1rem",
		borderBottom: "2px solid #e35183",
		position: "relative",
		margin: "1rem 3rem 1rem 1rem",
		clear: "both",
		"&:after": {
			content: "''",
			position: "absolute",
		},
		"&:before": {
			content: "''",
			position: "absolute",
			right: "-0.625rem",
			top: "calc(50% - 5px)",
			borderStyle: "solid",
			borderColor: "white white transparent transparent",
			borderWidth: "0.625rem",
			transform: "rotate(45deg)",
		},
		[theme.breakpoints.up("md")]: {
			width: "44%",
			margin: "1rem",
			"&:nth-of-type(2n)": {
				float: "right",
				margin: "1rem",
				borderColor: theme.palette.primary.light,
			},
			"&:nth-of-type(2n):before": {
				right: "auto",
				left: "-0.625rem",
				borderColor: "transparent transparent white white",
			},
		},
	},
	timeLineYear: {
		textAlign: "center",
		maxWidth: "9.375rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.8rem",
		color: "#fff",
		background: theme.palette.primary.light,
		lineHeight: 1,
		padding: "0.5rem 1rem",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	heading: {
		color: "white",
		padding: "3rem 0",
		textTransform: "uppercase",
	},
	subHeading: {
		color: "#fff",
		padding: 0,
		textTransform: "uppercase",
	},
	body1: {
		color: theme.palette.primary.light,
	},
	subtitle1: {
		color: theme.palette.secondary.main,
	},
	links: {
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(6),
	},
}));

const Resume = () => {
	const classes = useStyles();
	return (
		<Box component="header" className={classes.mainContainer}>
			<Typography variant="h4" align="center" className={classes.heading}>
				<Typed strings={["Work History"]} typeSpeed={40} />
			</Typography>

			<Box component="div" className={classes.timeLine}>
				<Typography
					variant="h2"
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2020-Present
				</Typography>
				<Box component="div" className={classes.timeLineItem}>
					<Typography
						variant="h5"
						align="center"
						className={classes.subHeading}
					>
						Electronics Department Associate
					</Typography>
					<Typography variant="body1" align="center" className={classes.body1}>
						Fred Meyer | Sandy, OR
					</Typography>
					<Typography
						variant="subtitle1"
						align="center"
						className={classes.subtitle1}
					>
						- Provide detailed information about electronic products to
						customers
						<br /> - Answer customer calls; perform cashier functions <br /> -
						Maintain awareness of overstock/understock conditions to maintain
						ordering system integrity <br /> - Perform inventory control
						functions
					</Typography>
				</Box>

				<Box component="div" className={classes.timeLineItem}>
					<Typography
						variant="h5"
						align="center"
						className={classes.subHeading}
					>
						Garden Center Associate
					</Typography>
					<Typography variant="body1" align="center" className={classes.body1}>
						Fred Meyer | Sandy, OR
					</Typography>
					<Typography
						variant="subtitle1"
						align="center"
						className={classes.subtitle1}
					>
						- Maintain the Garden Center hardlines <br /> - Maintain
						outdoor/indoor live plants merchandise displays: water, groom,
						prune, and ERB <br /> - Perform housekeeping functions to maintain
						shopability and customer safety <br /> - Provide information and
						sell plants and products
					</Typography>
				</Box>

				<Typography
					variant="h2"
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2016-2019
				</Typography>
				<Box component="div" className={classes.timeLineItem}>
					<Typography
						variant="h5"
						align="center"
						className={classes.subHeading}
					>
						Games & Tech SEO News Writer
					</Typography>
					<Typography variant="body1" align="center" className={classes.body1}>
						Freelance
					</Typography>
					<Typography
						variant="subtitle1"
						align="center"
						className={classes.subtitle1}
					>
						- Write SEO news articles and blog posts about gaming and technology
						for news websites raking thousands of views a day
					</Typography>
				</Box>
				<Typography
					variant="h2"
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2014-2015
				</Typography>
				<Box component="div" className={classes.timeLineItem}>
					<Typography
						variant="h5"
						align="center"
						className={classes.subHeading}
					>
						News Writer-Researcher
					</Typography>
					<Typography variant="body1" align="center" className={classes.body1}>
						Province of Dinagat Islands - Provincial Information Office
					</Typography>
					<Typography
						variant="subtitle1"
						align="center"
						className={classes.subtitle1}
					>
						- Write three daily news articles for provincial government press
						release <br /> - Research news-worthy topics, cover events,
						interview political personalities and government workers <br /> -
						Responsible for all the news articles in the quarterly provincial
						government newspaper
					</Typography>
				</Box>
			</Box>

			<Grid className={classes.links} container spacing={2} justify="center">
				<Grid item>
					<Link to="/">
						<Button variant="contained" color="primary">
							Back to Home
						</Button>
					</Link>
				</Grid>

				<Grid item>
					<Link to="/projects">
						<Button variant="contained" color="primary">
							View Projects
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Resume;
