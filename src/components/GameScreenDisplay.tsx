import * as React from 'react';
import Header from './Header';
import MainContentDisplay from './MainContentDisplay';
import ActionDisplay from './ActionDisplay';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%'
	} as React.CSSProperties,
	header: {} as React.CSSProperties,
	mainContentDisplay: {
		flex: '1'
	} as React.CSSProperties,
	actionDisplay: {} as React.CSSProperties
};

const GameScreenDisplay: React.FC = () => (
	<div style={styles.container}>
		<Header
			content="Welcome to the Trivia Challenge!"
			style={styles.header}
		/>
		<MainContentDisplay style={styles.mainContentDisplay}>
			<p>
				You will be presented with 10 True or False questions.
				ffdvffgfdgdfgdfgdfgdfgdfgdfgdfg
				dfsdfsdfdsfdsfdfdfdsffffffffffffffffffffffffffffffffffffffffffffffffff
			</p>
			<p>Can you score 100%</p>
		</MainContentDisplay>
		<ActionDisplay style={styles.actionDisplay}>
			<button type="button">True</button>
			<button type="button">True</button>
			<button type="button">True</button>
			<button type="button">True</button>
		</ActionDisplay>
	</div>
);

export default GameScreenDisplay;
