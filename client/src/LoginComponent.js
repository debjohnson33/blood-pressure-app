import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoginFormData } from './actions/loginForm';

class LoginComponent extends Component {

	handleSubmit = event => {
		event.preventDefault();

		var formData = new FormData();

		formData.append("email", this.inputNode1.value);
		formData.append("password", this.inputNode2.value);

		fetch("http://localhost:3001/api/tokens", {
			method: 'POST', 
			body: formData
		}).then(res => res.json()).then(res => (window.localStorage.setItem('jwt', res.jwt)))		
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
		            onChange={this.handleOnChange}
		            ref={node => {this.inputNode1 = node}}
		          />
		          <br /><br />
		          <label htmlFor="password">Password:</label>
		          <br />
		          <input
		            name="password"
		            id="password"
		            type="password"
		            onChange={this.handleOnChange}
		            ref={node => {this.inputNode2 = node}}
		          />
		          <br />
		          <button type="submit">Log In</button>
	          	</form>
          	</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		loginFormData: state.loginFormData
	}
}

export default connect(mapStateToProps, { 
	updateLoginFormData
})(LoginComponent);