import * as React from 'react';
import { GameContext, initialStateValues } from '../context/context';
import { quizReducer, FETCH_QUIZ, MARK_ANSWER } from '../context/reducer';
import { IApiResponse, QuizButtonAction } from '../utils/types';

const StoreProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(quizReducer, initialStateValues);

	const fetchQuiz = async () => {
		const response = await fetch(
			'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
		);
		const data: IApiResponse = await response.json();

		dispatch({ type: FETCH_QUIZ, payload: data.results });
	};

	const markAnswer = (key: QuizButtonAction) =>
		dispatch({ type: MARK_ANSWER, payload: key });

	React.useEffect(() => {
		state.quiz.length === 0 && fetchQuiz();
	}, []);

	return (
		<GameContext.Provider value={{ ...state, markAnswer }}>
			{children}
		</GameContext.Provider>
	);
};

export default StoreProvider;
