import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	alineCenter: {
		textAlign: 'center',
	},
	title: {
		fontSize: '24px',
		marginTop: '60px',
		textAlign: 'center',
	},
	comment: {
		marginBottom: '40px',
		borderTop: '2px solid #c4c4c4',
	},
	commentItem: {
		borderBottom: '0.5px solid #c4c4c4',
		width: '70%',
		margin: '20px auto',
		padding: '5px',
		fontFamily: 'Open Sans, sans-serif',
	},
	commentBody: {
		color: '#c4c4c4',
		fontSize: '16px',
		lineHeight: '20px',
		textAlign: 'center',
	},
}));

export default useStyles;
