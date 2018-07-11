import React, { Component } from 'react';

class LoginComponent extends Component {

	handleSubmit = event => {
		event.preventDefault();
		// console.log(this.inputNode1.value);
		// console.log(this.inputNode2.value);

		var formData = new FormData();

		formData.append("email", this.inputNode1.value);
		formData.append("password", this.inputNode2.value);

		fetch("http://localhost:3001/api/tokens", {
			method: 'POST', 
			body: formData
		}).then(res => res.json()).then(res => (console.log(res.jwt),
		window.localStorage.setItem('jwt', res.jwt)))		
			.then(() => this.props.history.push('/measurements'))
			.catch(function(error) {console.log('There is an error: ', error.message)});
	}

	render() {
		return (
			<div>
			<h2>Login:</h2>
				<form onSubmit={this.handleSubmit}>
		          <label htmlFor="email">Email: </label>
		          <br />
		          <input
		            name="email"
		            id="email"
		            type="email"
		            ref={node => {this.inputNode1 = node}}
		          />
		          <br /><br />
		          <label htmlFor="password">Password:</label>
		          <br />
		          <input
		            name="password"
		            id="password"
		            type="password"
		            ref={node => {this.inputNode2 = node}}
		          />
		          <br />
		          <button type="submit">Log In</button>
	          	</form>
          	</div>
		)
	}
}

export default LoginComponent;