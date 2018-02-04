import React from "react";
import axios from "axios";

class Register extends React.Component {
	state = {
		username:"",
		password:"",
		website:"",
		image:"",
		medium:"",
	};

	handleInputChange = event => {
		const {name, value } = event.target;
		this.setState({
			[name]:value
		})
	};

	handleFormSubmit = event => {
		event.preventDefault();
		console.log("registration submitted");
		console.log(this.state.username);
		console.log(this.state.password);
		console.log(this.state.website);
		console.log(this.state.image);
		console.log(this.state.medium);
		
		if(this.state.username && this.state.password && this.state.website && this.state.image && this.state.medium){
			const data = {username: this.state.username, password: this.state.password, website: this.state.website, image: this.state.image, medium: this.state.medium}
			axios.post("/api/auth/register", data).then(res => {
				console.log(res);
				this.props.history.push("/login");
			})
		}

	};

	render() {

	return (
		<div>

		<form>
			<h2>Join the community!</h2>
			<label>Username</label><input name="username" value={this.state.username} onChange={this.handleInputChange}/><br />
			<label>Password</label><input name="password" value={this.state.password} onChange={this.handleInputChange}/><br />
			<label>Website</label><input name="website" value={this.state.website} onChange={this.handleInputChange}/><br />
			<label>Image URL</label><input name="image" value={this.state.image} onChange={this.handleInputChange}/><br />
			<label>Primary medium</label><input name="medium" value={this.state.medium} onChange={this.handleInputChange}/><br />
			
			<button onClick={this.handleFormSubmit}>Submit</button>
		</form>	

		</div>
		)
}
};

export default Register
