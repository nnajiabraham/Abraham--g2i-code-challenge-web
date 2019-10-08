import * as React from 'react';

const styles = {
	mainContent: {
		backgroundColor: 'rgba(23, 126, 137, 1)',
		color: '#fff',
		fontSize: 'calc(1vw + 1vh + 2vmin)',
		wordWrap: 'break-word',
		padding: 15,
		borderRadius: 5,
		margin: 6,
		textAlign: 'center'
	} as React.CSSProperties
};

interface IProps {
	style?: React.CSSProperties;
}

const MainContentDisplay: React.FC<IProps> = props => {
	return (
		<div style={{ ...styles.mainContent, ...props.style }}>
			{props.children}
		</div>
	);
};

export default MainContentDisplay;
