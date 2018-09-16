import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate, getUser } from './actions/auth_actions';

class LoginComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			user: {}
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = event => {
		event.preventDefault();

		this.props.authenticate(this.state)
			.then(() => {
				if (this.props.user) {
					this.props.history.push("/")
				} else {
					window.alert("Sorry, email or password is incorrect. Try again.")
				}
			})
		this.setState({
			email: "",
			password: ""
		})
	}

	render() {
		return (
			<div>
			<h2>Login:</h2>
				<form onSubmit={(event) => this.handleSubmit(event)}>
		          <label htmlFor="email">Email: </label>
		          <br />
		          <input
		            name="email"
		            id="email"
					type="email"
					placeholder="Please enter your email"
		            onChange={this.handleChange}
					value={this.props.email}
		          />
		          <br /><br />
		          <label htmlFor="password">Password:</label>
		          <br />
		          <input
		            name="password"
		            id="password"
					type="password"
					placeholder="Please enter your password"
		            onChange={this.handleChange}
					value={this.props.email}
		          />
		          <br />
		          <button type="submit">Log In</button>
	          	</form>
          	</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		//email: state.email,
		//password: state.password
		user: state.auth.user
	})
}

export default connect(mapStateToProps, {authenticate, getUser})(LoginComponent);