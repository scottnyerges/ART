import React from "react";
import Button from "../components/Button"

const Home = () => {
	return (

		<div>
			<div class="row">
				<h1>AustinArtFNDR v1.0</h1> 
				<h2>Welcome.</h2>
			</div>
			<div class="row">	
			<img src={require("../logo.png")} />
				<div class="column">
					<h3>Already a member? Log in!</h3>
						<form action="/login"><input type="submit" value="Login"/></form> 
						<h3>Create an account!</h3>
						<form action="/register"><input type="submit" value="Register"/></form>
				</div>	
					 
			</div>

		</div>
		)
};

export default Home
