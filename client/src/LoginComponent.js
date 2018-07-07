import React, { Component } from 'react';

class LoginComponent extends Component {

	render() {
		return (
			<div>
			<h2>Login:</h2>
			<form>
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
          </form>
          </div>
		)
	}
}

export default LoginComponent;