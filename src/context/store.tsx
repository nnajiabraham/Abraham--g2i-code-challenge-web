import * as React from 'react';
import { GameContext, initialStateValues } from '../context/context';
import {
	quizReducer,
	FETCH_QUIZ,
	MARK_ANSWER,
	CLEAR_QUIZ
} from '../context/reducer';
import { IApiResponse, QuizButtonAction } from '../utils/types';

export const getQuiz = async () => {
	const response = await fetch(
		'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
	);
	return await response.json();
};

const StoreProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(quizReducer, initialStateValues);

	const fetchQuiz = () => {
		dispatch({ type: CLEAR_QUIZ, payload: [] });
		getQuiz()
			.then((data: IApiResponse) => {
				dispatch({ type: FETCH_QUIZ, payload: data.results });
			})
			.catch(e => console.log('Error loading quiz'));
	};

	const markAnswer = (key: QuizButtonAction) =>
		dispatch({ type: MARK_ANSWER, payload: key });

	return (
		<GameContext.Provider value={{ ...state, markAnswer, fetchQuiz }}>
			{children}
		</GameContext.Provider>
	);
};

export default StoreProvider;
