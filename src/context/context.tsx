import * as React from 'react';
import { IQuizContext } from '../types';

export const initialStateValues = {
	quiz: [],
	selectedQuizId: 0,
	score: 0,
	wrongAnswer: [{}],
	markAnswer: answer => {}
} as IQuizContext;

export const GameContext = React.createContext(initialStateValues);
export const useGameContext = () => React.useContext(GameContext);
