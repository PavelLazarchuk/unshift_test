import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	container: {
		width: '1180px',
		margin: '0 auto',
	},
	alineCenter: {
		textAlign: 'center',
		color: 'red',
	},
	form: {
		margin: '40px 0',
		padding: '10px 0',
		fontFamily: 'Open Sans, sans-serif',
	},
	formTitle: {
		fontSize: '18px',
		lineHeight: '20px',
		margin: '0 auto',
		width: '100%',
		height: '50px',
		resize: 'none',
	},
	formBody: {
		color: '#c4c4c4',
		fontSize: '16px',
		lineHeight: '20px',
		margin: '0 auto',
		width: '100%',
		height: '250px',
		resize: 'none',
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
