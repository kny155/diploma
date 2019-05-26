import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../Main';
import Error from '../Error';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route
					path="/login"
					render={() => (<div>login</div>)}
				/>
				<Route
					path="/registration"
					render={() => (<div>registration</div>)}
				/>
				<Route path="/404" component={Error} />
				<Route
					path="/"
					render={() => (<Main />)}
				/>
			</Switch>
		</Router>
	);
};
export default App;
