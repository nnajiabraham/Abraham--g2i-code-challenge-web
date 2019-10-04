import * as React from 'react';
import Header from '../components/Header';
import MainContentDisplay from '../components/MainContentDisplay';
import ActionDisplay from '../components/ActionDisplay';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { MdSend } from 'react-icons/md';

const styles = {
	container: {
		width: '70vw',
		// height: '80vh',
		backgroundColor: '#fff', //remove this later
		display: 'flex',
		flexDirection: 'column'
	} as React.CSSProperties,
	mainContentDisplay: {
		flex: '1',
		textAlign: 'center'
	} as React.CSSProperties,
	actionDisplay: {} as React.CSSProperties,
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

const Quiz: React.FC = () => {
	const a = 3;
	const [quiz, setQuiz] = React.useState<Array<IQuizSchema>>([
		{} as IQuizSchema
	]);
	React.useEffect(() => {
		console.log(a);

		fetch(
			'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
		)
			.then(res => res.json())
			.then((res: any) => {
				setQuiz(res.results);
				console.log(res.results[0]);
			})
			.catch(e => console.log(e));

		return () => {
			console.log('cleanup', a);
		};
	}, []);

	return (
		<div style={styles.container}>
			<Header content={quiz[0].category} />

			<MainContentDisplay>
				<p>{quiz[0].question}</p>
			</MainContentDisplay>

			<ActionDisplay style={styles.actionDisplay}>
				<Link to="/quiz">
					<Button>True</Button>
					<Button>False</Button>
				</Link>
				<Button>
					Submit <MdSend style={styles.button} />
				</Button>
			</ActionDisplay>
		</div>
	);
};

export default Quiz;
