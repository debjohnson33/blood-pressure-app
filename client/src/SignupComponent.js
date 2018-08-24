import React, { Component } from 'react';

class SignupComponent extends Component {

	handleSubmit = event => {
		event.preventDefault();

		const email = event.target.email.value;
		const password = event.target.password.value;

		fetch(`http://localhost:3001/api/users/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: email, password: password })
		})
			.then(response => response.json())
			.then(response => console.log(response))
				this.props.history.push(`/login`);
	}

	render() {
		return (
			<div>
			<h2>Sign Up:</h2>
				<form onSubmit={this.handleSubmit}>
		          <label htmlFor="email">Email: </label>
		          <br />
		          <input
		            name="email"
		            id="email"
		            type="email"
		          />
		          <br /><br />
		          <label htmlFor="password">Password:</label>
		          <br />
		          <input
		            name="password"
		            id="password"
		            type="password"
		          />
		          <br />
		          <button type="submit">Sign Up</button>
	          	</form>
          	</div>
		)
	}
}

export default SignupComponent;