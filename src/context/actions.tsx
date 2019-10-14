import { CLEAR_QUIZ, FETCH_QUIZ } from './reducer';
import { initialStateValues } from './context';
import { IApiResponse } from '../utils/types';

export const getQuiz = async () => {
	const response = await fetch(
		'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
	);
	return await response.json();
};

export const clearQuiz = dispatch => {
	dispatch({ type: CLEAR_QUIZ, payload: initialStateValues });
};

export const fetchQuiz = dispatch => {
	getQuiz()
		.then((data: IApiResponse) => {
			dispatch({ type: FETCH_QUIZ, payload: data.results });
		})
		.catch(e => console.log('Error loading quiz'));
};
