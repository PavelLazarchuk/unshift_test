import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import useStyles from '../AddPost/styles';
import API from '../../../services/api';
import FextField from '../../../shared/TextField';
import { getOnePost } from '../../../store/post/action';

const UpdatePost = ({ getOnePost, match, post }) => {
	const classes = useStyles();
	const { id } = match.params;
	const [value, setValue] = useState({
		body: '',
		title: '',
		isErrorTitle: false,
		isErrorBody: false,
		errorTitle: '',
		errorBody: '',
	});

	useEffect(() => {
		getOnePost(id);
	}, [id, getOnePost]);

	useEffect(() => {
		setValue({
			body: post ? post.body : '',
			title: post ? post.title : '',
		});
	}, [post]);

	const updatePost = () => {
		API.updatePost(id, { title: value.title, body: value.body });
	};

	const checkForm = () => {
		if (
			value.title.length >= 20 &&
			value.title.length <= 200 &&
			value.body.length >= 100 &&
			value.body.length <= 1000
		) {
			updatePost();
		}
		if (value.title.length <= 20 || value.title.length >= 200) {
			setValue({
				...value,
				isErrorTitle: true,
				errorTitle: 'Text length from 20 to 200 characters',
				isErrorBody: false,
				errorBody: '',
			});
		} else if (value.body.length <= 100 || value.body.length >= 1000) {
			setValue({
				...value,
				isErrorBody: true,
				errorBody: 'Text length from 100 to 1000 characters',
				isErrorTitle: false,
				errorTitle: '',
			});
		}
	};

	const handleChange = event => {
		setValue({ ...value, [event.target.name]: event.target.value });
	};

	return (
		<div className={classes.container}>
			<div className={classes.form}>
				<FextField
					name="title"
					styleName={classes.formTitle}
					handleChange={handleChange}
					placeholder="Enter post title"
					defaultValue={value.title}
				/>
				{value.isErrorTitle && (
					<div className={classes.alineCenter}>{value.errorTitle}</div>
				)}
				<FextField
					name="body"
					styleName={classes.formBody}
					handleChange={handleChange}
					placeholder="Enter post body"
					defaultValue={value.body}
				/>
				{value.isErrorBody && (
					<div className={classes.alineCenter}>{value.errorBody}</div>
				)}
				<button onClick={() => checkForm()} className={classes.submit}>
					Update Post
				</button>
			</div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
