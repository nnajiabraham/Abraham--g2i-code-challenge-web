export const FETCH_QUIZ = 'FETCH_QUIZ';

export const quizReducer = (state, action) => {
	switch (action.type) {
		case FETCH_QUIZ:
			return {
				...state,
				quiz: [...state.quiz, ...action.payload]
			};
		default:
			return state;
	}
};
