import * as React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { store } from './redux';
import { Provider } from 'react-redux';
import Index from './screens';

const App: React.FC = () => {
	return (
		<div className="container">
			<Provider store={store}>
				<Index />
			</Provider>
		</div>
	);
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
