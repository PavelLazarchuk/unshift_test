import { SUCCESS_ONE_POST } from '../post/actionNames';
import { getComment, error } from '../comment/action';

const getChildrenEntities = function(store) {
	return function(next) {
		return function(action) {
			if (action.type === SUCCESS_ONE_POST) {
				if (action.payload.comments.length > 0) {
					store.dispatch(getComment(action.payload.comments));
				} else if (action.payload.comments.length === 0) {
					store.dispatch(error('No comments, you can be the first'));
				} else if (!Array.isArray(action.payload.comments)) {
					store.dispatch(error('ERROR: Wrong data type! Only Array'));
				}
			}

			next(action);
		};
	};
};

export default getChildrenEntities;
