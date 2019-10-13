import * as React from 'react';
import { GameContext, initialStateValues } from '../context/context';
import Header from '../components/Header';
import MainContentDisplay from '../components/MainContentDisplay';
import { IWrongAnswerSchema, QuizButtonAction } from '../utils/types';
import { decodeHTML } from '../utils/util';
import { styles } from '../styles';
import Button from '../components/Button';
import ActionDisplay from '../components/ActionDisplay';
import { useHistory, Link } from 'react-router-dom';

const generateUniqueKey = () => {
	return Math.random()
		.toString(36)
		.substring(7);
};

const Result: React.FC = () => {
	const { quiz, wrongAnswer, score } = React.useContext(GameContext);
	const history = useHistory();

	const actionButtonHandler = () => () => {
		history.push('/');
	};

	return (
		<div style={styles.container}>
			<Header content={`You Scored ${score} of ${quiz.length}`} />
			{wrongAnswer.length > 0 ? (
				<MainContentDisplay style={styles.mainContentDisplay}>
					{wrongAnswer.map((failedAnswer: IWrongAnswerSchema) => (
						<div key={generateUniqueKey()}>
							<p
								key={generateUniqueKey()}
								dangerouslySetInnerHTML={decodeHTML(
									quiz[failedAnswer.quizId].question
								)}
							/>
							<span key={generateUniqueKey()}>
								<b>Your Answer:</b> {failedAnswer.submitted_answer}
							</span>
							<br />
							<span key={generateUniqueKey()}>
								<b>Correct Answer:</b>
								{quiz[failedAnswer.quizId].correct_answer}
							</span>
							<hr />
						</div>
					))}
				</MainContentDisplay>
			) : null}
			<ActionDisplay>
				<Button onClick={actionButtonHandler()}>
					{QuizButtonAction.PLAY_AGAIN}
				</Button>
			</ActionDisplay>
		</div>
	);
};

export default Result;
