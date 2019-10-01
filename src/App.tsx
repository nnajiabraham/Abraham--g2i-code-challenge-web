import React, { Component } from 'react';
import Home from './screens/home';
import './styles/App.css';
import { store } from './redux';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Home />
			</Provider>
		);
	}
}

export default App;
