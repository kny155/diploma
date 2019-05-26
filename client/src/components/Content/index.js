import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	layout: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		paddingTop: theme.spacing(8),
		[theme.breakpoints.down('xs')]: {
			paddingTop: theme.spacing(7),
		},
	},
}));

const Content = () => {
	const classes = useStyles();
	return <main className={classes.layout}>Diploma</main>;
};

export default Content;
