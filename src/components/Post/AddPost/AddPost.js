import React, { useState } from 'react';

import useStyles from './styles';
import API from '../../../services/api';
import FextField from '../../../shared/TextField';

const AddPost = () => {
	const classes = useStyles();
	const [value, setValue] = useState({
		body: '',
		title: '',
		isErrorTitle: false,
		isErrorBody: false,
		errorTitle: '',
		errorBody: '',
	});

	const addPost = () => {
		API.addPost({ title: value.title, body: value.body });
	};

	const checkForm = () => {
		if (
			value.title.length >= 20 &&
			value.title.length <= 200 &&
			value.body.length >= 100 &&
			value.body.length <= 1000
		) {
			addPost();
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
					Add Post
				</button>
			</div>
		</div>
	);
};

export default AddPost;
