import * as React from 'react';
import Header from './Header';
import MainContentDisplay from './MainContentDisplay';
import ActionDisplay from './ActionDisplay';
import Button from './Button';
import { Link } from 'react-router-dom';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%'
	} as React.CSSProperties,
	mainContentDisplay: {
		flex: '1',
		textAlign: 'center'
	} as React.CSSProperties,
	actionDisplay: {} as React.CSSProperties
};

const GameScreenDisplay: React.FC = () => (
	<div style={styles.container}>
		<Header content="Welcome to the Trivia Challenge!" />
		<MainContentDisplay style={styles.mainContentDisplay}>
			<p>You will be presented with 10 True or False questions.</p>
			<p>Can you score 100%</p>
		</MainContentDisplay>
		<Link to="/quiz">
			<ActionDisplay style={styles.actionDisplay}>
				<Button>BEGIN</Button>
			</ActionDisplay>
		</Link>
	</div>
);

export default GameScreenDisplay;
