import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {


	handleChange(e) {
		const {name, value } = e.target;

		this.setState({
			[name]: value
		});
	}	

	submitHandler(e) {
		e.preventDefault();
		const credentials = {
			usernameOrEmail: this.state.usernameOrEmail,
			password: this.state.password
		}

		this.props.login(credentials);
	}

	render() {
		if(this.props.loggedIn) {
			return (
				<div>
					You are logged in.
				</div>
				)
		}
		return (
			<form onSubmit={(e) => this.submitHandler(e)}>
				<input name="usernameOrEmail" onChange={e => this.handleChange(e)}></input>
				<input name= "password" onChange={e => this.handleChange(e)}></input>
				<button type="submit" value="Submit">Submit</button>
			</form>
		);
	}
}

export default Login;