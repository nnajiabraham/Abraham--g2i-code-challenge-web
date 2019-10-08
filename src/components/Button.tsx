import * as React from 'react';

const styles = {
	button: {
		borderRadius: 15,
		color: '#ffffff',
		fontSize: 'calc(1.5em + 1vmin)',
		fontWeight: 'bold',
		background: '#3498db',
		padding: '10px 20px 10px 20px',
		border: 'none',
		margin: 5,
		cursor: 'pointer'
	} as React.CSSProperties
};

interface IProps extends React.DOMAttributes<HTMLButtonElement> {
	style?: React.CSSProperties;
}

const Button: React.FC<IProps> = ({ style, children, ...otherProps }) => {
	return (
		<>
			<button
				type="button"
				style={{ ...styles.button, ...style }}
				{...otherProps}
			>
				{children}
			</button>
		</>
	);
};

export default Button;
