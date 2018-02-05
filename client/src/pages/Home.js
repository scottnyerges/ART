import React from "react";
import Button from "../components/Button";
// import ArtEvent from "../components/ArtEvent";
import ArtEventList from "../components/ArtEventList";



const Home = () => {
	return (

		<div>
			<div className="row">
				<h1>AustinArtFNDR v1.0</h1> 
				<h2>Welcome.</h2>
			</div>
			<div className="row">	
			<img src={require("../logo.png")} />
				<div className="column">
					<h3>Already a member? Log in!</h3>
						<form action="/login"><input type="submit" value="Login"/></form> 
						<h3>Create an account!</h3>
						<form action="/register"><input type="submit" value="Register"/></form>
						<h3>Scraper goes here</h3>
						<Button />
						<ArtEventList />
				</div>
			</div>			
		</div>						
		)
};

export default Home
