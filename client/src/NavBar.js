import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { logout } from './actions/auth_actions';
//import './Medication.css';

const link = {
	width: '100px',
	padding: '14px',
	margin: '6px',
	background: '#D46A6A',
	textDecoration: 'none',
	color: 'white',
}

class Navbar extends Component {
	handleLogout = (e) => {
		this.props.logout();
		this.props.history.push(`/`);
		alert('You are now Logged Out');
	}

	render() {
		return (
			<div className="nav">
				<br />
				<NavLink to='/' exact style={link}>Home</NavLink>
		
				<NavLink to='/login' exact style={link}>Login</NavLink>
		
				<NavLink to='/signup' exact style={link}>Sign Up</NavLink>
		
				<NavLink to='' onClick={(e) => this.handleLogout(e) } style={link}>Log Out</NavLink>
		
			</div>
		)
	}
} 

export default withRouter(connect(null, {logout})(Navbar));