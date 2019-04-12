import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault();
		if (this.props.authenticate(this.state)) {
			this.props.history.push('/user_profile')
			window.alert("You're Logged In!")
		} else {
			window.alert("Sorry, email or password is incorrect. Try again.")				
		}
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
		            onChange={(event) => this.handleChange(event)}
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
		            onChange={(event) => this.handleChange(event)}
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

export default withRouter(connect(mapStateToProps, {authenticate, getUser})(LoginComponent));