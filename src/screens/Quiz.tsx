import * as React from 'react';
import {
	GameContext,
	initialStateValues,
	useGameContext
} from '../context/context';
import { quizReducer, FETCH_QUIZ } from '../context/reducer';
import { IApiResponse } from '../types';
import QuizScreenDisplay from '../components/QuizScreenDisplay';

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
	} as React.CSSProperties,
	button: {
		verticalAlign: 'middle'
	} as React.CSSProperties
};

const Quiz: React.FC = () => {
	// const [quiz, setQuiz] = React.useState<Array<IQuizSchema>>([]);
	// const [quizId, setQuizId] = React.useState(0);
	// const [score, setScore] = React.useState(0);
	// const [wrongAnswers, saveWrongAnswers] = React.useState<
	// 	Array<IWrongAnswerSchema>
	// >([]);

	const {
		quiz,
		selectedQuizId,
		score,
		wrongAnswer,
		markAnswer,
		setQuiz,
		setSelectedQuizId,
		setScore,
		saveWrongAnswers
	} = useGameContext();

	const [state, dispatch] = React.useReducer(quizReducer, initialStateValues);

	const fetchQuiz = async () => {
		const response = await fetch(
			'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
		);
		const data: IApiResponse = await response.json();
		dispatch({ type: FETCH_QUIZ, payload: data.results });
	};

	// const markAnswerHandler = (key: string) => {
	// 	console.log('quizId', selectedQuizId);
	// 	console.log('quiz', quiz.length);

	// 	if (selectedQuizId < quiz.length - 1) {
	// 		setSelectedQuizId(selectedQuizId + 1);
	// 		if (key === quiz[selectedQuizId].correct_answer) {
	// 			console.log('correct answer');
	// 			setScore(score + 1);
	// 		} else {
	// 			saveWrongAnswers([
	// 				...wrongAnswer,
	// 				{
	// 					quizId: selectedQuizId,
	// 					submitted_answer: key
	// 				}
	// 			]);
	// 		}
	// 	}
	// };

	React.useEffect(() => {
		fetchQuiz();
	}, []);

	return (
		<GameContext.Provider
			value={{
				...state,
				quiz: [...state.quiz]
			}}
		>
			<div style={styles.container}>
				<QuizScreenDisplay />
			</div>
		</GameContext.Provider>
	);
};

export default Quiz;
