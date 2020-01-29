import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

import useStyles from './styles';
import API from '../../../services/api';
import removeElement from '../../../utils/removeElement';

const DeleteModal = ({ id }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const deletePost = id => {
		API.deletePost(id).then(data => {
			if (data.status === 200) removeElement(id);
		});
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<DeleteForeverOutlinedIcon
				className={classes.delete}
				onClick={handleOpen}
			/>
			<Modal
				aria-labelledby="simple-modal-title"
				open={open}
				onClose={handleClose}
			>
				<div className={classes.paper}>
					<h2 id="simple-modal-title">
						Are you sure you want to delete this post?
					</h2>
					<button
						onClick={() => {
							deletePost(id);
							handleClose();
						}}
					>
						Delete
					</button>
					<button onClick={handleClose}>Сancel</button>
				</div>
			</Modal>
		</>
	);
};

export default DeleteModal;
