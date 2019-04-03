import React, { Component } from 'react';

class LogoutComponent extends Component {

	componentWillMount() {
		this.props.logout();
		this.props.history.push(`/home`);
		alert('You are now Logged Out');
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