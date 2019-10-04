import * as React from 'react';

const styles = {
	actionContent: {
		color: 'rgba(239, 45, 86, 1)',
		backgroundColor: '#20222B',
		paddingTop: 20,
		paddingBottom: 20,
		textAlign: 'center'
	} as React.CSSProperties
};

interface IProps {
	style?: React.CSSProperties;
}

const ActionDisplay: React.FC<IProps> = props => {
	return (
		<div style={{ ...styles.actionContent, ...props.style }}>
			{props.children}
		</div>
	);
};

export default ActionDisplay;
