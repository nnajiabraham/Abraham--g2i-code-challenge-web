import * as React from 'react';
import { GameContext } from '../context/context';
import Header from '../components/Header';
import MainContentDisplay from '../components/MainContentDisplay';
import { QuizButtonAction, IQuizSchema } from '../utils/types';
import { decodeHTML } from '../utils/util';
import { styles } from '../styles';
import Button from '../components/Button';
import ActionDisplay from '../components/ActionDisplay';
import { useHistory } from 'react-router-dom';

const generateUniqueKey = () => {
	return Math.random()
		.toString(36)
		.substring(7);
};

const Result: React.FC = () => {
	const { quiz, wrongAnswer, score, clearQuiz, endQuiz } = React.useContext(
		GameContext
	);
	const history = useHistory();

	const actionButtonHandler = () => () => {
		clearQuiz();
		history.push('/quiz');
	};

	const wrongAnswerKeys = wrongAnswer.map(wrongAnswer => wrongAnswer.quizId);

	const formatResult = () =>
		endQuiz ? (
			<MainContentDisplay style={styles.mainContentDisplay}>
				{quiz.map((quiz: IQuizSchema, index) => (
					<div key={generateUniqueKey()}>
						<b>Question Number:{index + 1}</b>
						<hr />
						<p
							key={generateUniqueKey()}
							dangerouslySetInnerHTML={decodeHTML(quiz.question)}
						/>
						<span key={generateUniqueKey()}>
							<b>Your Answer:</b>{' '}
							{wrongAnswerKeys.includes(index)
								? wrongAnswer[wrongAnswerKeys.indexOf(index)]
										.submitted_answer
								: quiz.correct_answer}
						</span>
						<br />
						<span key={generateUniqueKey()}>
							<b>Correct Answer:</b>
							{quiz.correct_answer}
						</span>
						<hr />
					</div>
				))}
			</MainContentDisplay>
		) : null;

	return (
		<div style={styles.container}>
			<Header content={`You Scored ${score} of ${quiz.length}`} />
			{formatResult()}
			<ActionDisplay>
				<Button onClick={actionButtonHandler()}>
					{QuizButtonAction.PLAY_AGAIN}
				</Button>
			</ActionDisplay>
		</div>
	);
};

export default Result;
