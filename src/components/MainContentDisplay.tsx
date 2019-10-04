import * as React from 'react';

const styles = {
	mainContent: {
		backgroundColor: '#464B54',
		color: '#fff',
		// display: 'flex',
		// flexDirection: 'column',
		fontSize: 'calc(1vw + 1vh + 2vmin)',
		wordWrap: 'break-word',
		padding: 15,
		borderRadius: 20,
		margin: 6
	} as React.CSSProperties
};

interface IProps {
	style?: React.CSSProperties;
}

const MainContentDisplay: React.FC<IProps> = props => {
	return (
		<div style={{ ...styles.mainContent, ...props.style }}>
			{props.children}
			<p>a</p>
		</div>
	);
};

export default MainContentDisplay;
