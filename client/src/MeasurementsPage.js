import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import GoalsPage from './GoalsPage';
import { fetchMeasurements } from './actions/measurements';
import { deleteMeasurement } from './actions/measurements';
import { fetchGoals } from './actions/goals';

class MeasurementsPage extends Component {

	constructor() {
		super();
		this.state = {email: undefined, userId: undefined};
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		// let jwt = window.localStorage.getItem('jwt');
		// let result = jwtDecode(jwt);
		// console.log(result);
		// this.setState({email: result.email, userId: result.id})
		// console.log(result.id)
		//console.log(this.props.nextProps.location.pathname)
		this.props.fetchMeasurements();
		this.props.fetchGoals();
	}

	componentDidUpdate(prevProps) {
		if (this.props.user.measurements !== prevProps.user.measurements) {
			this.props.fetchMeasurements();
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.history.push('/user_profile');
	}

	handleDelete = (e, measurementId) => {
		e.preventDefault();
		console.log(measurementId);
		this.props.deleteMeasurement(measurementId);
		this.props.history.push(`/users/${this.props.user.id}/measurements`)
	}

	render() {
		const { user, measurements, goals } = this.props;
		let renderMeasurements;
		const userId = parseInt(user.userId, 10);
		if (this.props.measurements.length > 0) {
			renderMeasurements = measurements.map((measurement, index) => {
				return <li style={{listStyleType: "none"}} key={index}>{measurement.id} - Blood Pressure: {measurement.systolic_bp} / {measurement.diastolic_bp} Pulse: {measurement.pulse}   <button onClick={(e) => this.handleDelete(e, measurement.id)}>Delete</button></li>
			});
		} else {
			return <p>No measurements for {user.email}  <button onClick={(e) => this.handleSubmit(e) }>To User Profile Page</button></p>
			
		}
			
		return (
			<div>
				<h1>Measurements for {this.props.user.email}</h1>
				<div>
					<GoalsPage goals={goals} />
				</div>
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
		measurements: state.measurements,
		goals: state.goals
	});
};

export default withRouter(connect(mapStateToProps, { fetchMeasurements, deleteMeasurement, fetchGoals })(MeasurementsPage));