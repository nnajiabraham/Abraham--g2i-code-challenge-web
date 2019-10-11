import * as React from 'react';
import { GameContext } from '../context/context';
import { QuizButtonAction } from '../utils/types';
import Header from '../components/Header';
import MainContentDisplay from '../components/MainContentDisplay';
import ActionDisplay from '../components/ActionDisplay';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';
import { decodeHTML } from '../utils/util';
import { styles } from '../styles';

const Quiz: React.FC = () => {
	const { quiz, selectedQuizId, markAnswer, endQuiz } = React.useContext(
		GameContext
	);
	let history = useHistory();

	const moveToResultPage = () => {
		history.push('/result');
	};
	React.useEffect(() => {
		if (endQuiz) {
			moveToResultPage();
		}
	}, [endQuiz]);

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
