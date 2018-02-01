import React from "react";
import axios from "axios";


class Login extends React.Component {
	state = {
		username:"",
		password:""
	};

	handleInputChange = event => {
		const {name, value } = event.target;
		this.setState({
			[name]:value
		})
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if(this.state.username && this.state.password){
const data = {username: this.state.username, password: this.state.password}
			axios.post("/api/auth/login", data).then(res => {
				console.log(res);
			})
		}

	};

	render() {
		
	return (
		<div>

		<form action="POST">
			<label>Username</label><input name="username" onChange={this.handleInputChange} /><br />
			<label>Password</label><input type="password" onChange={this.handleInputChange} /><br />
			<button onClick={this.handleFormSubmit}>Submit</button>
		</form>	

		</div>
		)
}
};

export default Login