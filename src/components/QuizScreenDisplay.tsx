import * as React from 'react';
import Header from './Header';
import MainContentDisplay from './MainContentDisplay';
import ActionDisplay from './ActionDisplay';
import Button from './Button';
import { QuizButtonAction } from '../types';
import { useGameContext } from '../context/context';

const QuizScreenDisplay: React.FC = () => {
	const {
		quiz,
		selectedQuizId,
		score,
		wrongAnswer,
		setQuiz,
		setSelectedQuizId,
		setScore,
		saveWrongAnswers
	} = useGameContext();

	const decodeHTML = (string: string) => {
		return { __html: string };
	};

	const markAnswer = (key: string) => {
		console.log('quizId', selectedQuizId);
		console.log('quiz', quiz.length);

		if (selectedQuizId < quiz.length - 1) {
			setSelectedQuizId(selectedQuizId + 1);
			if (key === quiz[selectedQuizId].correct_answer) {
				console.log('correct answer');
				setScore(score + 1);
			} else {
				saveWrongAnswers([
					...wrongAnswer,
					{
						quizId: selectedQuizId,
						submitted_answer: key
					}
				]);
			}
		}
	};

	const actionButtonHandler = (key: QuizButtonAction) => () => {
		switch (key) {
			case QuizButtonAction.TRUE:
				markAnswer(QuizButtonAction.TRUE.valueOf());
				break;
			case QuizButtonAction.FALSE:
				markAnswer(QuizButtonAction.FALSE.valueOf());
				break;
			case QuizButtonAction.SUBMIT:
				markAnswer(QuizButtonAction.SUBMIT.valueOf());
				break;
		}
	};

	return quiz.length ? (
		<>
			<Header content={quiz[selectedQuizId].category} />
			<MainContentDisplay>
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
	);
};

export default QuizScreenDisplay;
