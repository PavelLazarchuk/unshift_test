import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: '#0ebf7b',
		padding: '10px 0',
	},
	ul: {
		fontSize: '20px',
		listStyleType: 'none',
		display: 'flex',
		justifyContent: 'center',
	},
	li: {
		margin: '0 40px',
	},
	link: {
		textDecoration: 'none',
		fontSize: '20px',
		fontFamily: 'Open Sans, sans-serif',
		padding: '10px 20px',
		border: '1px solid #ffffff',
		borderRadius: '30px',
		color: '#ffffff',
		'&:hover': {
			color: 'blue',
			border: '1px solid blue',
		},
	},
}));

export default useStyles;
