import {
	IQuizState,
	IAction,
	QuizButtonAction,
	IWrongAnswerSchema
} from '../utils/types';

export const FETCH_QUIZ = 'FETCH_QUIZ';
export const MARK_ANSWER = 'MARK_ANSWER';

const markAnswer = (
	state: IQuizState,
	payload: QuizButtonAction
): IQuizState => {
	const correctAnswer =
		payload.valueOf() === state.quiz[state.selectedQuizId].correct_answer;

	const isLastQuestion = state.selectedQuizId === state.quiz.length - 1;

	return {
		...state,
		selectedQuizId: isLastQuestion
			? state.selectedQuizId
			: state.selectedQuizId + 1,
		wrongAnswer: correctAnswer
			? state.wrongAnswer
			: [
					...state.wrongAnswer,
					{
						quizId: state.selectedQuizId,
						submitted_answer: payload.valueOf()
					} as IWrongAnswerSchema
			  ],
		score: correctAnswer ? state.score + 1 : state.score,
		endQuiz: isLastQuestion
	};
};

export const quizReducer = (state: IQuizState, action: IAction): IQuizState => {
	switch (action.type) {
		case FETCH_QUIZ:
			return {
				...state,
				quiz: [...state.quiz, ...action.payload]
			};
		case MARK_ANSWER:
			return markAnswer(state, action.payload);
		default:
			return state;
	}
};
