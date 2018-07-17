import React, { Component } from 'react';

class LogoutComponent extends Component {

	handleSubmit = event => {
		event.preventDefault();
		window.localStorage.clear('jwt');
		this.props.history.push(`/login`);
	}

	render() {
		return (
			<div>
		        <button type="submit">Logout</button>
          	</div>
		)
	}
}

export default LogoutComponent;