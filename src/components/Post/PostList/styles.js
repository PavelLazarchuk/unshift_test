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
	postList: {
		margin: '40px 0',
	},
	postItem: {
		borderTop: '4px solid #0ebf7b',
		borderRadius: '2px 2px 8px 8px',
		boxShadow: '0px 10px 15px rgba(200, 200, 200, 0.5)',
		width: '80%',
		margin: '20px auto',
		padding: '10px 5px',
		fontFamily: 'Open Sans, sans-serif',
		backgroundColor: '#ffffff',
	},
	postItemFlex: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '10px',
	},
	postTitle: {
		color: '#7d7e79',
		fontSize: '30px',
		textAlign: 'center',
		marginBottom: '15px',
	},
	postBody: {
		color: '#c4c4c4',
		fontSize: '18px',
		lineHeight: '22px',
		textAlign: 'center',
	},
}));

export default useStyles;
