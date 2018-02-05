import React from "react";
import axios from "axios";

const NoMatch = () => {
	return (
		<div><p>That page doesn't exist. Better backtrack...</p>
			<form action="/home"><input type="submit" value="Home"/></form> 

		</div>
		)
};

export default NoMatch
