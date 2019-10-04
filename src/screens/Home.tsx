import * as React from 'react';
import GameScreenDisplay from '../components/GameScreenDisplay';

const styles = {
	container: {
		width: '80vw',
		height: '80vh',
		backgroundColor: '#fff' //remove this later
	} as React.CSSProperties
};

const Home: React.FC = () => (
	<div style={styles.container}>
		<GameScreenDisplay />
	</div>
);

export default Home;
