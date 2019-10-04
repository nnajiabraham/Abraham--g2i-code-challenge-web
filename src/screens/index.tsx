import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Results from './Result';

const Index: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/quiz">
					<Quiz />
				</Route>
				<Route path="/result">
					<Results />
				</Route>
			</Switch>
		</Router>
	);
};

export default Index;
