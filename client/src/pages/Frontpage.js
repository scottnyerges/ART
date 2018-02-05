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
		</div>
	</div>
		)
};

export default Frontpage