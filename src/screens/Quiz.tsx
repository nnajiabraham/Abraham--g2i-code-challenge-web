import * as React from 'react';
import { GameContext } from '../context/context';
import { QuizButtonAction } from '../types';
import Header from '../components/Header';
import MainContentDisplay from '../components/MainContentDisplay';
import ActionDisplay from '../components/ActionDisplay';
import Button from '../components/Button';

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

const Quiz: React.FC = () => {
	const { quiz, selectedQuizId, markAnswer } = React.useContext(GameContext);

	React.useEffect(() => {
		if (selectedQuizId + 1 === quiz.length) {
			console.log('finished');
		}
	}, [selectedQuizId]);

	const decodeHTML = (string: string) => {
		return { __html: string };
	};

	const actionButtonHandler = (key: QuizButtonAction) => () => {
		switch (key) {
			case QuizButtonAction.TRUE:
				markAnswer(QuizButtonAction.TRUE);
				break;
			case QuizButtonAction.FALSE:
				markAnswer(QuizButtonAction.FALSE);
				break;
		}
	};

	return (
		<div style={styles.container}>
			{quiz.length ? (
				<>
					<Header content={quiz[selectedQuizId].category} />
					<MainContentDisplay style={styles.mainContentDisplay}>
						<p
							dangerouslySetInnerHTML={decodeHTML(
								quiz[selectedQuizId].question
							)}
						/>
					</MainContentDisplay>
					<ActionDisplay>
						<Button onClick={actionButtonHandler(QuizButtonAction.TRUE)}>
							{QuizButtonAction.TRUE}
						</Button>
						<Button onClick={actionButtonHandler(QuizButtonAction.FALSE)}>
							{QuizButtonAction.FALSE}
						</Button>
					</ActionDisplay>
				</>
			) : (
				<MainContentDisplay>
					<p>loading...</p>
				</MainContentDisplay>
			)}
		</div>
	);
};

export default Quiz;
