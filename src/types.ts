export interface IQuizSchema {
	category: string;
	question: string;
	correct_answer: String;
	incorrect_answers: Array<String>;
}

export interface IWrongAnswerSchema {
	quizId: number;
	submitted_answer: String;
}

export interface IAction {
	type: string;
	payload: any;
}

export enum QuizButtonAction {
	TRUE = 'True',
	FALSE = 'False',
	SUBMIT = 'Submit'
}

export interface IQuizState {
	quiz: Array<IQuizSchema>;
	selectedQuizId: number;
	score: number;
	wrongAnswer: Array<IWrongAnswerSchema>;
	markAnswer: (key: QuizButtonAction) => IQuizState;
}

export interface IApiResponse {
	response_code: number;
	results: Array<IQuizSchema>;
}
