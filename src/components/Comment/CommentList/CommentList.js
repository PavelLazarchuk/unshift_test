import React from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import AddComment from '../AddComment';

const CommentList = ({ comment, error }) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.title}>Comments</div>
			<div className={classes.comment}>
				{error.status && (
					<div className={classes.alineCenter}>{error.text}</div>
				)}

				{comment &&
					comment.map(elem => {
						return (
							<div key={elem.id} className={classes.commentItem}>
								<div className={classes.commentBody}>{elem.body}</div>
							</div>
						);
					})}
			</div>
			<AddComment />
		</>
	);
};

const mapStateToProps = ({ comment }) => {
	return {
		comment: comment.list,
		error: {
			status: comment.isError,
			text: comment.error,
		},
	};
};

export default connect(mapStateToProps)(CommentList);
