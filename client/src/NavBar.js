import React from 'react';
import { NavLink } from 'react-router-dom';
//import './Medication.css';

const link = {
	width: '100px',
	padding: '14px',
	margin: '6px',
	background: '#D46A6A',
	textDecoration: 'none',
	color: 'white',
}

const Navbar = () => 
	<div className="nav">
		<br />
		<NavLink to='/' exact style={link}>Home</NavLink>

		<NavLink to='/login' exact style={link}>Login</NavLink>

		<NavLink to='/signup' exact style={link}>Sign Up</NavLink>

		<NavLink to='/logout' exact style={link}>Log Out</NavLink>

	</div>

export default Navbar;