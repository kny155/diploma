import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '../../containers/PrivateRouteContainer';

const useStyles = makeStyles(theme => ({
	content: {
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
	return (
		<main className={classes.content}>
			<Switch>
				<Route exact path="/" component={() => <div>main</div>} />
				<PrivateRoute path="/profile" component={() => <div>profile</div>} />
				<Route exact path="/parkings" component={() => <div>parkings</div>} />
				<PrivateRoute
					exact
					path="/parkings/add"
					component={() => <div>parking add</div>}
				/>
				<Route
					path="/parkings/:id"
					component={({ match }) => <div>parkings: {match.params.id}</div>}
				/>
				<PrivateRoute path="/settings" component={() => <div>settings</div>} />
				<Route path="*" component={() => <Redirect to="/404" />} />
			</Switch>
		</main>
	);
};

export default Content;
