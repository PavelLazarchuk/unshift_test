import { GET_ALL_COMMENT, CLEAN_COMMENT, ERROR } from './actionNames';

const initialState = {
	list: null,
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_COMMENT:
			return {
				isError: false,
				list: action.payload,
			};

		case CLEAN_COMMENT:
			return {
				list: null,
				isError: false,
			};

		case ERROR:
			return {
				...state,
				isError: true,
				error: action.payload,
			};

		default:
			return state;
	}
};
