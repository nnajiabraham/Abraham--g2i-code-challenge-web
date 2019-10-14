import * as React from 'react';
import { IQuizState, QuizButtonAction } from '../utils/types';

export const initialStateValues: IQuizState = {
	quiz: [],
	selectedQuizId: 0,
	score: 0,
	wrongAnswer: [],
	endQuiz: false,
	markAnswer: (key: QuizButtonAction) => {},
	fetchQuiz: () => {},
	clearQuiz: () => {}
} as IQuizState;

export const GameContext = React.createContext<IQuizState>(initialStateValues);
