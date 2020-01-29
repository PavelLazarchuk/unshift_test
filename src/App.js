import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './components/Root';
import Header from './components/Header';

const App = () => {
	return (
		<Router>
			<Header />
			<Root />
		</Router>
	);
};

export default App;
