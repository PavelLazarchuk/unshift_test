import API from '../../services/api';
import {
	SUCCESS_ALL_POST,
	SUCCESS_ONE_POST,
	CLEAN_ONE_POST,
	FAILURE_AXIOS,
} from './actionNames';

const successAllPost = payload => {
	return {
		type: SUCCESS_ALL_POST,
		payload,
	};
};

const successOnePost = payload => {
	return {
		type: SUCCESS_ONE_POST,
		payload,
	};
};

const errorAxios = payload => {
	return {
		type: FAILURE_AXIOS,
		payload,
	};
};

export const cleanOnePost = payload => {
	return {
		type: CLEAN_ONE_POST,
		payload,
	};
};

export const getOnePost = id => {
	return dispatch => {
		API.getOnePost(id)
			.then(data => {
				dispatch(successOnePost(data.data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};

export const getPostList = () => {
	return dispatch => {
		API.getAllPost()
			.then(data => {
				dispatch(successAllPost(data.data));
			})
			.catch(error => {
				dispatch(errorAxios(error));
			});
	};
};
