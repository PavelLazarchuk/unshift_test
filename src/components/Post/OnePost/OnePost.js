import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import useStyles from '../PostList/styles';
import CommentList from '../../Comment/CommentList';
import { getOnePost } from '../../../store/post/action';
import { cleanOnePost } from '../../../store/post/action';
import { cleanComment } from '../../../store/comment/action';

const OnePost = ({
	match,
	getOnePost,
	post,
	error,
	cleanOnePost,
	cleanComment,
}) => {
	const classes = useStyles();
	const { id } = match.params;

	useEffect(() => {
		getOnePost(id);

		return () => {
			cleanOnePost();
			cleanComment();
		};
	}, [id, getOnePost, cleanOnePost, cleanComment]);

	return (
		<div className={classes.container}>
			{error.status && <div className={classes.alineCenter}>{error.text}</div>}

			{!post && <div className={classes.alineCenter}>Загрузка...</div>}

			{post && (
				<div className={classes.postItem} id={post.id}>
					<div className={classes.postTitle}>{post.title}</div>
					<div className={classes.postBody}>{post.body}</div>
					<CommentList />
				</div>
			)}
		</div>
	);
};

const mapStateToProps = ({ post }) => {
	return {
		post: post.onePost,
		error: {
			status: post.isError,
			text: post.error,
		},
	};
};

const mapDispatchToProps = {
	getOnePost,
	cleanOnePost,
	cleanComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(OnePost);
