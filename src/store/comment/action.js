import { GET_ALL_COMMENT, CLEAN_COMMENT, ERROR } from './actionNames';

export const getComment = payload => {
	return {
		type: GET_ALL_COMMENT,
		payload,
	};
};

export const cleanComment = payload => {
	return {
		type: CLEAN_COMMENT,
		payload,
	};
};

export const error = payload => {
	return {
		type: ERROR,
		payload,
	};
};
