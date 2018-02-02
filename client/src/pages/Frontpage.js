import React from "react";

const Frontpage = () => {
	return (
	<div class="container">
		<div class="section group">
			<div class="row">
				<div class="col span_4_of_4">
					<div id="circle"><a href="./home">Home</a></div>
					<img src="http://get-a-wingman.com/wp-content/uploads/2015/10/How-to-Groom-a-Beard-660x273.jpg"/>
					<form action="./Login"><input type="submit" value="Login"/></form> 
					<form action="./Register"><input type="submit" value="Register"/></form> 
					<form action="./Gallery"><input type="submit" value="Member Gallery"/></form> <br/>
				</div>
			</div>
			<div class="row">	
				<div class="col span_4_of_4" id="centerStyle">
				<a href="https://placeholder.com"><img src="http://via.placeholder.com/350x350" id="imgStyle"/></a>
				</div>
			</div>	
			<div class="row">
				<div class="col span_4_of_4">
				<div id="triangleDown"></div>
				</div>
			</div>	
		</div>

		<div class="section group">	
			<div class="row">
				<div class="col span_3_of_4">
						 <div id="slideshow">
					   <div>
					     <img src="http://via.placeholder.com/800x600" id="slideStyle"/>
					   </div>
					   <div>
					     <img src="http://via.placeholder.com/800x600" id="slideStyle"/>
					   </div>
					   <div>
					     <img src="http://via.placeholder.com/800x600" id="slideStyle"/>
					   </div>
					</div>
				</div>	

				<div class="col span_1_of_4">
				<div id="eventText">
					<h1>What's On</h1>
					<h2>Friday</h2>
					<h3>An event</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisl consectetur, aliquam justo vel, convallis sapien. Duis id mauris volutpat, maximus nunc nec, gravida arcu.</p>
					<h3>An event</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisl consectetur, aliquam justo vel, convallis sapien. Duis id mauris volutpat, maximus nunc nec, gravida arcu.</p>
					<h2>Saturday</h2>
					<h3>An event</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisl consectetur, aliquam justo vel, convallis sapien. Duis id mauris volutpat, maximus nunc nec, gravida arcu.</p>
					<h3>An event</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisl consectetur, aliquam justo vel, convallis sapien. Duis id mauris volutpat, maximus nunc nec, gravida arcu.</p>
					<h2>Sunday</h2>
					<h3>An event</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisl consectetur, aliquam justo vel, convallis sapien. Duis id mauris volutpat, maximus nunc nec, gravida arcu.</p>
					<h3>An event</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisl consectetur, aliquam justo vel, convallis sapien. Duis id mauris volutpat, maximus nunc nec, gravida arcu.</p>
				</div>
				</div>
			</div>	

			<div class="row">
				<div class="col span_4_of_4">
				<div id="triangleDown"></div>
				</div>
			</div>	

		</div>	

		<div class="section group">
			<div class="row">
				<div class="col span_1_of_4">
				<img src="http://via.placeholder.com/250x250" id="slideStyle"/>
				</div>
				<div class="col span_1_of_4">
					<div id="profileStyle">
					<h2>profile hed</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisl consectetur, aliquam justo vel, convallis sapien. Duis id mauris volutpat, maximus nunc nec, gravida arcu.</p>
					</div>
				</div>
				<div class="col span_1_of_4">
				<img src="http://via.placeholder.com/250x250" id="slideStyle"/>
				</div>
				<div class="col span_1_of_4">
					<div id="profileStyle">
					<h2>profile hed</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisl consectetur, aliquam justo vel, convallis sapien. Duis id mauris volutpat, maximus nunc nec, gravida arcu.</p>
					</div>
				</div>	
			</div>

			<div class="row">
				<div class="col span_4_of_4">
					<div id="circle2"><a href="portal.html">Member Portal</a></div>
				</div>
			</div>

		</div>

		<div class="section group">
			<div class="row">
				<div class="col span_4_of_4">
					footer
				</div>	
			</div>
		</div>	
		
	</div>
		)
};

export default Frontpage