import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';

export const img = 'https://source.unsplash.com/1600x900/?nature,water';

export default function App(item) {
	return (
		<Router>
			<Switch location={item}>
				<div style={{ overflow: 'hidden' }}>
					<Route path='/' exact component={Home} />
				</div>
			</Switch>
		</Router>
	);
}
