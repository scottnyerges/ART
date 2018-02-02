import React from "react";
import axios from "axios";

class Register extends React.Component {
	state = {
		username:"",
		password:""
		// ADD ADDITIONAL USER REGISTRATION FIELDS HERE?
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
		
		if(this.state.username && this.state.password){
			// ADD OTHER VARIABLES INTO && LINE ABOVE?
const data = {username: this.state.username, password: this.state.password}
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
			<label>Username</label><input name="username" value={this.state.username} onChange={this.handleInputChange}/><br />
			<label>Password</label><input name="password" value={this.state.password} onChange={this.handleInputChange}/><br />
			
			<button onClick={this.handleFormSubmit}>Submit</button>
		</form>	

		</div>
		)
}
};

export default Register