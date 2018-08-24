import React, { Component } from 'react';

class LogoutComponent extends Component {

	componentWillMount() {
		window.localStorage.clear('jwt');
		alert('You are now Logged Out');
    	this.props.history.push(`/login`);
	}

	render() {
		return (
			<div>
			<br />
			<br />
			<br />
			<br />
			<br />
		        <h1>You are now Logged Out</h1>
          	</div>
		)
	}
}

export default LogoutComponent;