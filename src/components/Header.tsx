import * as React from 'react';
import { StyleHTMLAttributes } from 'react';

const styles = {
	header: {
		display: 'flex',
		width: '40vw',
		color: '#fff',
		backgroundColor: '#20222B'
	},
	h3: {
		margin: '0'
	}
};

interface IProps {
	content: string;
}

const Header: React.FC<IProps> = props => {
	return (
		<div style={styles.header}>
			<h3 style={styles.h3}>{props.content}</h3>
		</div>
	);
};

export default Header;
