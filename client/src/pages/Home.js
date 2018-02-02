import React from "react";
import Button from "../components/Button"

const Home = () => {
	return (
		<div>Home 
		<br/><br/>
		<form action="./Login"><input type="submit" value="Login"/></form> 
		<form action="./Register"><input type="submit" value="Register"/></form> 
		</div>
		)
};


export default Home