import * as React from 'react';
import Header from '../components/Header';
import MainContentDisplay from '../components/MainContentDisplay';
import ActionDisplay from '../components/ActionDisplay';
import Button from '../components/Button';

const styles = {
	container: {
		width: '70vw',
		backgroundColor: '#fff', //remove this later
		display: 'flex',
		flexDirection: 'column'
	} as React.CSSProperties,
	mainContentDisplay: {
		flex: '1',
		textAlign: 'center'
	} as React.CSSProperties,
	button: {
		verticalAlign: 'middle'
	} as React.CSSProperties
};

interface IQuizSchema {
	category: string;
	question: string;
	correct_answer: String;
	incorrect_answers: Array<String>;
}

interface IWrongAnswerSchema {
	quizId: number;
	submitted_answer: String;
}

enum QuizButtonAction {
	TRUE = 'True',
	FALSE = 'False',
	SUBMIT = 'Submit'
}

const Quiz: React.FC = () => {
	const a = 3;
	const [quiz, setQuiz] = React.useState<Array<IQuizSchema>>([]);
	const [quizId, setQuizId] = React.useState(0);
	const [score, setScore] = React.useState(0);
	const [wrongAnswers, saveWrongAnswers] = React.useState<
		Array<IWrongAnswerSchema>
	>([]);

	React.useEffect(() => {
		console.log(a);

		fetch(
			'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
		)
			.then(res => res.json())
			.then((res: any) => {
				setQuiz(res.results);
				console.log(res.results);
			})
			.catch(e => console.log(e));

		return () => {
			console.log('cleanup', a);
		};
	}, []);

	const decodeHTML = (string: string) => {
		return { __html: string };
	};

	const markAnswer = (key: string) => {
		console.log('quizId', quizId);
		console.log('quiz', quiz.length);

		if (quizId < quiz.length - 1) {
			setQuizId(quizId + 1);
			if (key === quiz[quizId].correct_answer) {
				console.log('correct answer');
				setScore(score + 1);
			} else {
				console.log('wrong answer');
				console.log(wrongAnswers.length);
				saveWrongAnswers([
					...wrongAnswers,
					{
						quizId: quizId,
						submitted_answer: key
					}
				]);
			}
		}
	};

	const actionButtonHandler = (key: QuizButtonAction) => () => {
		switch (key) {
			case QuizButtonAction.TRUE:
				markAnswer(QuizButtonAction.TRUE.valueOf());
				break;
			case QuizButtonAction.FALSE:
				markAnswer(QuizButtonAction.FALSE.valueOf());
				break;
			case QuizButtonAction.SUBMIT:
				markAnswer(QuizButtonAction.SUBMIT.valueOf());
				break;
		}
	};

	const mainDisplayRender = () =>
		quiz.length ? (
			<>
				<Header content={quiz[quizId].category} />
				<MainContentDisplay>
					<p dangerouslySetInnerHTML={decodeHTML(quiz[quizId].question)} />
				</MainContentDisplay>
				<ActionDisplay>
					<Button onClick={actionButtonHandler(QuizButtonAction.TRUE)}>
						{QuizButtonAction.TRUE}
					</Button>
					<Button onClick={actionButtonHandler(QuizButtonAction.FALSE)}>
						{QuizButtonAction.FALSE}
					</Button>
				</ActionDisplay>
			</>
		) : (
			<MainContentDisplay>
				<p>loading...</p>
			</MainContentDisplay>
		);

	return <div style={styles.container}>{mainDisplayRender()}</div>;
};

export default Quiz;
