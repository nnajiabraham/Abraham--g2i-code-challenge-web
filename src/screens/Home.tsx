import * as React from 'react';
import Header from '../components/Header';
import MainContentDisplay from '../components/MainContentDisplay';
import ActionDisplay from '../components/ActionDisplay';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const styles = {
	container: {
		width: '70vw',
		// height: '80vh',
		backgroundColor: '#fff', //remove this later
		display: 'flex',
		flexDirection: 'column'
	} as React.CSSProperties,
	mainContentDisplay: {
		flex: '1',
		textAlign: 'center'
	} as React.CSSProperties,
	actionDisplay: {} as React.CSSProperties
};

const Home: React.FC = () => (
	<div style={styles.container}>
		<Header content="Welcome to the Trivia Challenge!" />

		<MainContentDisplay style={styles.mainContentDisplay}>
			<p>You will be presented with 10 True or False questions.</p>
			<p>Can you score 100%</p>
		</MainContentDisplay>

		<ActionDisplay style={styles.actionDisplay}>
			<Link to="/quiz">
				<Button>BEGIN</Button>
			</Link>
		</ActionDisplay>
	</div>
);

export default Home;
