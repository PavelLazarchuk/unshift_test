import React, { useState } from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import API from '../../../services/api';
import TextField from '../../../shared/TextField';
import { getOnePost } from '../../../store/post/action';

const AddComment = ({ post, getOnePost }) => {
	const classes = useStyles();
	const [value, setValue] = useState({
		body: '',
		isError: false,
		errorText: '',
	});

	const addComment = () => {
		API.addComment({ postId: post.id, body: value.body }).then(() => {
			getOnePost(post.id);
			setValue({ ...value, body: '' });
		});
	};

	const checkForm = () => {
		if (value.body.length >= 20 && value.body.length <= 200) {
			setValue({ ...value, isError: false, errorText: '' });
			addComment();
		} else {
			setValue({
				...value,
				isError: true,
				errorText: 'Text length from 20 to 200 characters',
			});
		}
	};

	const handleChange = event => {
		setValue({ ...value, [event.target.name]: event.target.value });
	};

	return (
		<>
			<div className={classes.title}>Add comment</div>
			<TextField
				name={'body'}
				styleName={classes.form}
				handleChange={handleChange}
				placeholder={'Enter your comment'}
				defaultValue={value.body}
			/>
			{value.isError && <div className={classes.error}>{value.errorText}</div>}
			<button className={classes.submit} onClick={() => checkForm()}>
				Submit
			</button>
		</>
	);
};

const mapStateToProps = ({ post }) => {
	return {
		post: post.onePost,
	};
};

const mapDispatchToProps = {
	getOnePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
