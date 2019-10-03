import * as React from 'react';

const styles = {
	header: {
		color: 'rgba(239, 45, 86, 1)',
		backgroundColor: '#20222B',
		paddingTop: 20,
		paddingBottom: 20,
		textAlign: 'center'
	} as React.CSSProperties,
	span: {
		margin: '0',
		fontWeight: 900,
		fontSize: 'calc(1.5em + 1vw)',
		wordWrap: 'break-word'
	} as React.CSSProperties
};

interface IProps {
	content: string;
}

const Header: React.FC<IProps> = props => {
	return (
		<div style={styles.header}>
			<span style={styles.span}>{props.content}</span>
		</div>
	);
};

export default Header;
