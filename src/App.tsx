import React, { Component } from 'react';
import Home from './screens/home';
import './styles/App.css';
import { store } from './redux';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Provider store={store}>
					<Home />
				</Provider>
			</div>
		);
	}
}

export default App;
