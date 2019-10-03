import * as React from 'react';
import Header from '../components/Header';
import Display from '../components/Display';

const styles = {
	container: {
		width: '80vw',
		height: '80vh',
		backgroundColor: '#fff' //remove this later
	} as React.CSSProperties
};

const Home: React.FC = () => (
	<div style={styles.container}>
		<Header content="Welcome to the Trivia Challenge!" />
		<Display>
			<p>
				You will be presented with 10 True or False questions.
				ffdvffgfdgdfgdfgdfgdfgdfgdfgdfg
				dfsdfsdfdsfdsfdfdfdsffffffffffffffffffffffffffffffffffffffffffffffffff
			</p>
			<p>Can you score 100%</p>
		</Display>
	</div>
);

export default Home;
