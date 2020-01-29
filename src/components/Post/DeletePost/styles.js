import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		top: '100px',
		left: '50%',
		transform: 'translate(-50%)',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	delete: {
		cursor: 'pointer',
		color: '#ff0000',
		'&:hover': {
			color: '#ff88ff',
		},
	},
}));

export default useStyles;
