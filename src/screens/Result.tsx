import * as React from 'react';
import { GameContext } from '../context/context';
import Header from '../components/Header';
import MainContentDisplay from '../components/MainContentDisplay';

const styles = {
	container: {
		width: '70vw',
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'column'
	} as React.CSSProperties,
	mainContentDisplay: {
		flex: '1',
		textAlign: 'center'
	} as React.CSSProperties
};

const Result: React.FC = () => {
	const { quiz, selectedQuizId, markAnswer } = React.useContext(GameContext);
	console.log('the quiz', quiz);

	return (
		<div style={styles.container}>
			<Header content="Result" />
			<MainContentDisplay style={styles.mainContentDisplay}>
				<p>loading</p>
			</MainContentDisplay>
		</div>
	);
};

export default Result;
