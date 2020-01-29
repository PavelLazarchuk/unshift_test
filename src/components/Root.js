import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import OnePost from './Post/OnePost';
import PostList from './Post/PostList';
import AddPost from './Post/AddPost';
import UpdatePost from './Post/UpdatePost';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/post" component={PostList} />
			<Route path="/post/:id" component={OnePost} />
			<Route path="/addPost" component={AddPost} />
			<Route path="/updatePost/:id" component={UpdatePost} />
		</Switch>
	);
}

export default App;
