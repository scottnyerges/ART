import React from "react";

const Home = () => {
	return (
		<div>
		<h1>AustinArtFNDR v1.0</h1> 
		<h2>Welcome.</h2>
		<h3>Already a member? Log in!</h3>
		<form action="/login"><input type="submit" value="Login"/></form> 
		<h3>Create an account!</h3>
		<form action="/register"><input type="submit" value="Register"/></form> 
		</div>
		)
};


export default Home
