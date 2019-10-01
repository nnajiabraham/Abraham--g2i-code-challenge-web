import React from 'react';

const styles = {
	container: {
		display: 'flex',
		height: '100vh',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(8, 76, 97, 1)'
	}
};

const Home: React.FC = () => (
	<div style={styles.container}>
		<span>hello</span>
	</div>
);

export default Home;
