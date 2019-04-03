import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from './actions/auth_actions';

class SignupComponent extends Component {
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

	handleSubmit = event => {
		event.preventDefault();
		if (this.props.signupUser(this.state)) {
			this.props.history.replace('/users/:id/measurements');
			window.alert("Thanks for signing up!")
		} else {
			window.alert("We're having issues creating your account")
		}
	
	}

	render() {
		return (
			<div>
			<h2>Sign Up:</h2>
				<form onSubmit={(event) => this.handleSubmit(event)}>
		          <label htmlFor="email">Email: </label>
		          <br />
		          <input
		            name="email"
		            id="email"
					type="email"
					onChange={(event) => this.handleChange(event)}
					value={this.state.email}
		          />
		          <br /><br />
		          <label htmlFor="password">Password:</label>
		          <br />
		          <input
		            name="password"
		            id="password"
					type="password"
					onChange={(event) => this.handleChange(event)}
					value={this.state.password}
		          />
		          <br />
		          <button type="submit">Sign Up</button>
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

export default connect(mapStateToProps, {signupUser})(SignupComponent);