import * as React from 'react';
import { GameContext } from '../context/context';
import { useHistory } from 'react-router-dom';

import MainContentDisplay from '../components/MainContentDisplay';
import ActionDisplay from '../components/ActionDisplay';
import Header from '../components/Header';
import Button from '../components/Button';
import { QuizButtonAction } from '../utils/types';
import { decodeHTML } from '../utils/util';
import { styles } from '../styles';

const Quiz: React.FC = () => {
	const {
		quiz,
		selectedQuizId,
		markAnswer,
		endQuiz,
		fetchQuiz
	} = React.useContext(GameContext);

	let history = useHistory();

	const moveToResultPage = () => history.push('/result');

	React.useEffect(() => {
		fetchQuiz();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		if (endQuiz) {
			moveToResultPage();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
