import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import DeletePost from '../DeletePost';
import { getPostList } from '../../../store/post/action';

const PostList = ({ post, error, getPostList }) => {
	const classes = useStyles();

	useEffect(() => {
		getPostList();
	}, [getPostList]);

	return (
		<div className={classes.container}>
			{error.status && <div className={classes.alineCenter}>{error.text}</div>}

			{!post && <div className={classes.alineCenter}>Загрузка...</div>}

			{post && (
				<div className={classes.postList}>
					{post.map(elem => {
						return (
							<div key={elem.id} id={elem.id} className={classes.postItem}>
								<div className={classes.postItemFlex}>
									<DeletePost id={elem.id} />
									<Link to={`/updatePost/${elem.id}`}>edit</Link>
									<Link to={`/post/${elem.id}`}>Read more...</Link>
								</div>
								<div className={classes.postTitle}>{elem.title}</div>
								<div className={classes.postBody}>{elem.body}</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

const mapStateToProps = ({ post }) => {
	return {
		post: post.list,
		error: {
			status: post.isError,
			text: post.error,
		},
	};
};

const mapDispatchToProps = {
	getPostList,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
