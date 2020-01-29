import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Header = () => {
	const classes = useStyles();

	return (
		<header className={classes.header}>
			<ul className={classes.ul}>
				<li className={classes.li}>
					<Link to="/" className={classes.link}>
						Home
					</Link>
				</li>
				<li className={classes.li}>
					<Link to="/post" className={classes.link}>
						All post list
					</Link>
				</li>
				<li className={classes.li}>
					<Link to="/addPost" className={classes.link}>
						Add post
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
