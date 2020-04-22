import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import dateFormat from 'dateformat';

import GoalsPage from './GoalsPage';
import MeasurementsChartComponent from './MeasurementsChartComponent';
import { fetchMeasurements } from './actions/measurements';
import { deleteMeasurement } from './actions/measurements';
import { fetchGoals } from './actions/goals';

class MeasurementsPage extends Component {

	constructor(props) {
		super(props);
		this.state = {email: undefined, userId: undefined};
		this.handleDelete = this.handleDelete.bind(this);
		this.handleToEdit = this.handleToEdit.bind(this);
	}

	componentDidMount() {
		this.props.fetchMeasurements();
		this.props.fetchGoals();
	}

	componentDidUpdate(prevProps) {
		if (this.props.user.measurements !== prevProps.user.measurements) {
			this.props.fetchMeasurements();
		}
		if (this.props.user.goals !== prevProps.user.goals) {
			this.props.fetchGoals();
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

	handleToGoalsFormSubmit = (e) => {
		e.preventDefault();
		this.props.history.push(`/users/${this.props.user.id}/goals/new`)
	}
	
	handleToEdit = (e, userId) => {
		e.preventDefault();

		this.props.history.push({
			pathname: `/users/${userId}/measurement/edit`,
			customData: {editMode: true}
		});
	}

	render() {
		const { user, measurements, goals } = this.props;
		let renderMeasurements;
		console.log(this.state);
		const userId = parseInt(user.userId, 10);
		if (this.props.measurements.length > 0) {
			renderMeasurements = measurements.map((measurement, index) => {
				let formattedDate = dateFormat(measurement.date_time, 'mmm dd, yyyy  h:MM TT')
				return <li style={{listStyleType: "none"}} key={index}>Date/Time: {formattedDate} Blood Pressure: {measurement.systolic_bp} / {measurement.diastolic_bp} Pulse: {measurement.pulse} Notes: {measurement.notes} <button onClick={(e) => this.handleToEdit(e, user.id) }>Review or Edit</button> <button onClick={(e) => this.handleDelete(e, measurement.id)}>Delete</button></li>
			});
		} else {
			return <p>No measurements for {user.email}  <button onClick={(e) => this.handleSubmit(e) }>To User Profile Page</button></p>
			
		}
			
		return (
			<div>
				<h1>Measurements for {this.props.user.email}</h1>
				<div>
					<GoalsPage user={user} goals={goals} />
				</div>
				<div>
					<ul>{renderMeasurements}</ul>
				</div>
				
				<Link to={
					{pathname: `/users/${user.id}/chart`,
					measurements: measurements,
					goals: goals
					}
					}>Measurements Chart</Link>
				<button onClick={(e) => this.handleSubmit(e) }>To User Profile Page</button>
				<button onClick={(e) => this.handleToGoalsFormSubmit(e) }>Click Here to Add Your Goals</button> 
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