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

export interface IActionModel {
	type: string;
	payload: any;
}

export enum QuizButtonAction {
	TRUE = 'True',
	FALSE = 'False',
	SUBMIT = 'Submit'
}

export interface IQuizContext {
	quiz: Array<IQuizSchema>;
	selectedQuizId: number;
	score: number;
	wrongAnswer: Array<IWrongAnswerSchema>;
	markAnswer: (answer: string) => void;
	setQuiz: () => Array<IQuizSchema>;
	setSelectedQuizId: (id: number) => number;
	setScore: (score: number) => number;
	saveWrongAnswers: (
		wrongAnswer: Array<IWrongAnswerSchema>
	) => Array<IWrongAnswerSchema>;
}

export interface IApiResponse {
	response_code: number;
	results: Array<IQuizSchema>;
}
