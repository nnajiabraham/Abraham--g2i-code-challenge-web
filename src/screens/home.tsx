import React from 'react';
import Header from '../components/Header';

const styles = {
	container: {
		backgroundColor: '#464B54'
	}
};

const Home: React.FC = () => (
	<div style={styles.container}>
		<Header content="Welcome to the Trivia Challenge!" />
		<p>hello</p>
		<p>hello</p>
		<p>hello</p>
	</div>
);

export default Home;
