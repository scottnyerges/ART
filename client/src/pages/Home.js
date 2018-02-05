import React from "react";
import Button from "../components/Button";
import ArtEvent from "../components/ArtEvent"



const Home = () => {
	return (

		<div>
		    //   <p>{props.headline}</p>
      // <p>{props.summary}</p>
      // <p>{props.URL}</p>
      // <p>{props.venue}</p>
      // <p>{props.date}</p>
			<ArtEvent />
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
						<h3>Scraper goes here</h3>
				</div>
			</div>			
		</div>						
		)
};

export default Home
