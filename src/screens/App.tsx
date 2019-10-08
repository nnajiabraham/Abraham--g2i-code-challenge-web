import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Results from './Result';

const App: React.FC = () => {
	return (
		<div className="container">
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
		</div>
	);
};

export default App;
