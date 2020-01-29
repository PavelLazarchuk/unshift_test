import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	error: {
		color: 'red',
		textAlign: 'center',
	},
	form: {
		color: '#c4c4c4',
		fontSize: '16px',
		lineHeight: '20px',
		margin: '0 auto',
		width: '100%',
		height: '100px',
		fontFamily: 'Open Sans, sans-serif',
		resize: 'none',
	},
	title: {
		fontSize: '18px',
		margin: '20px 0 10px 0',
		textAlign: 'center',
		fontFamily: 'Open Sans, sans-serif',
	},
	submit: {
		border: 0,
		padding: '5px 10px',
		margin: '10px auto',
		display: 'inline-block',
		borderRadius: '20px',
		color: '#ffffff',
		backgroundColor: '#c4c4c4',
		cursor: 'pointer',
	},
}));

export default useStyles;
