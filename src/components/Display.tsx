import * as React from 'react';

const styles = {
	mainContent: {
		backgroundColor: '#464B54',
		color: '#fff',
		display: 'flex',
		flexDirection: 'column',
		fontSize: 'calc(0.5em + 1vw)',
		height: '60%',
		wordWrap: 'break-word',
		padding: 14
	} as React.CSSProperties,
	span: {
		margin: '0',
		fontWeight: 900,
		fontSize: 'calc(1.5em + 1vw)',
		wordWrap: 'break-word'
	} as React.CSSProperties
};

const Display: React.FC = props => {
	return (
		<div style={styles.mainContent}>
			{props.children}
			<p>a</p>
		</div>
	);
};

export default Display;
