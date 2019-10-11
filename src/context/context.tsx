import * as React from 'react';
import { IQuizState } from '../types';

export const initialStateValues: IQuizState = {
	quiz: [],
	selectedQuizId: 0,
	score: 0,
	wrongAnswer: []
} as IQuizState;

export const GameContext = React.createContext<IQuizState | any>(
	initialStateValues
);
