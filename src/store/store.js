import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import postReducer from './post/reducer';
import commentReducer from './comment/reducer';
import getCommentByPost from './middleware/getCommentByPost';

const rootReducer = combineReducers({
	post: postReducer,
	comment: commentReducer,
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	undefined,
	enhancer(applyMiddleware(thunk, getCommentByPost)),
);

export default store;
