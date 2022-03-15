import React from "react";
import {Link} from "react-router-dom";

export const Application = ({ }) => {
	return (<React.Fragment>

		<h1>Стартовая страница.</h1>
		<Link to="/post"><button type="button">Posts</button></Link>&nbsp;
		<Link to="/profile"><button type="button">Profiles</button></Link>

	</React.Fragment>)
}