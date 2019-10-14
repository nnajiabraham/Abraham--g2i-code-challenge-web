import * as React from 'react';
import { GameContext, initialStateValues } from '../context/context';
import { quizReducer, MARK_ANSWER } from '../context/reducer';
import { QuizButtonAction } from '../utils/types';
import { fetchQuiz, clearQuiz } from './actions';

const StoreProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(quizReducer, initialStateValues);

	const markAnswer = (key: QuizButtonAction) =>
		dispatch({ type: MARK_ANSWER, payload: key });

	return (
		<GameContext.Provider
			value={{
				...state,
				markAnswer,
				fetchQuiz: () => fetchQuiz(dispatch),
				clearQuiz: () => clearQuiz(dispatch)
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export default StoreProvider;
