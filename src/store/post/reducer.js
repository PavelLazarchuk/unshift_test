import {
	SUCCESS_ALL_POST,
	SUCCESS_ONE_POST,
	CLEAN_ONE_POST,
	FAILURE_AXIOS,
} from './actionNames';

const initialState = {
	list: null,
	onePost: null,
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_ALL_POST:
			return {
				...state,
				isError: false,
				list: action.payload,
			};

		case SUCCESS_ONE_POST:
			return {
				...state,
				isError: false,
				onePost: action.payload,
			};
		case CLEAN_ONE_POST:
			return {
				...state,
				onePost: null,
				isError: false,
			};

		case FAILURE_AXIOS:
			return {
				...state,
				isError: true,
				error: action.payload,
			};

		default:
			return state;
	}
};
