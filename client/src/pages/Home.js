import React from "react";
import ArtEventList from "../components/ArtEventList";
import ArtEvent from "../components/ArtEvent";
let myHeadline = "testhead:"
let mySummary = "testsum:"
let myURL = "testURL:"
let myVenue = "testvenue:"
let myDate = "testdate:"

const Home = () => {
	return (
		<div>




		<div className="row" id="row">
		<h3>Events</h3>
		<ArtEventList />
		</div>




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

				</div>
			</div>			
		</div>						
		)
};

export default Home
