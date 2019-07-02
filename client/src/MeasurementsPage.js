import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { fetchMeasurements } from './actions/measurements';

class MeasurementsPage extends Component {

	constructor() {
		super();
		this.state = {email: undefined, userId: undefined};
	}

	componentDidMount() {
		// let jwt = window.localStorage.getItem('jwt');
		// let result = jwtDecode(jwt);
		// console.log(result);
		// this.setState({email: result.email, userId: result.id})
		// console.log(result.id)
		this.props.fetchMeasurements();
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.history.push('/user_profile');
	}

	render() {
		const { user, measurements } = this.props;
		console.log(measurements);
		let renderMeasurements;
		const userId = parseInt(user.userId, 10);
		if (this.props.measurements.length > 0) {
			renderMeasurements = this.props.measurements.map((measurement, index) => {
				return <li style={{listStyleType: "none"}} key={index}>{measurement.id} - Blood Pressure: {measurement.systolic_bp} / {measurement.diastolic_bp} Pulse: {measurement.pulse}</li>
			});
		} else {
			return <p>No measurements for {this.props.user.email}  <button onClick={(e) => this.handleSubmit(e) }>To User Profile Page</button></p>
			
		}
			
		return (
			<div>
				<h1>Measurements for {this.props.user.email}</h1>
				<div>
					<ul>{renderMeasurements}</ul>
				</div>
				
				<button onClick={(e) => this.handleSubmit(e) }>To User Profile Page</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth.currentUser,
		measurements: state.measurements
	});
};

export default withRouter(connect(mapStateToProps, { fetchMeasurements })(MeasurementsPage));