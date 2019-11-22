import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateGoalsFormData } from './actions/goalsForm';
import { createGoal } from './actions/goals';

class GoalsForm extends Component {

	constructor(props) {
		super(props);
		this.state = {userId: this.props.userId};
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	handleOnChange = event => {
		const { name, value } = event.target;
		const currentGoalsFormData = Object.assign({}, this.props.goalsFormData, {
			[name]: value
		})
		this.props.updateGoalsFormData(currentGoalsFormData)
	}

	handleOnSubmit = event => {
		event.preventDefault();
		this.props.createGoal(this.state.userId, this.props.goalsFormData);
		this.props.history.push(`/users/${this.props.user.id}/measurements`);
    }
    
    handleToMeasurements = event => {
        event.preventDefault();
        this.props.history.push(`/users/${this.props.user.id}/measurements`);
    }

	render() {

		const  { systolic_bp, diastolic_bp, frequency } = this.props.goalsFormData;

		return (
			<div>
			<h4>Add Your Blood Pressure and Frequency Goals (Consult with Your Doctor to Establish These): </h4>
			<form onSubmit={this.handleOnSubmit}>
				<div>
					<label htmlFor='systolic'>Systolic Blood Pressure:</label>
					<input 
						onChange={this.handleOnChange}
						name='systolic_bp' 
						value={systolic_bp} 
						placeholder="Systolic BP (Top Number)"
					/>
				</div>
				<br />
				<div>
					<label htmlFor='diastolicBloodPressure'>Diastolic Blood Pressure:</label>
					<input 
						name='diastolic_bp'
						onChange={this.handleOnChange} 
						value={diastolic_bp} 
						placeholder="Diastolic BP (Bottom Number)"
					/>
				</div>
				<br />
				<div>
					<label htmlFor='frequency'>Frequency (Daily, Weekly):</label>
					<input 
						name='frequency'
						onChange={this.handleOnChange} 
						value={frequency} 
						placeholder="Frequency"
					/>
				</div>
				<br />
				<button type="submit">Add Goals</button>
                <button onClick={(e) => this.handleToMeasurements(e) }>Back to Measurements Page</button>
			</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		goalsFormData: state.goalsFormData,
		user: state.auth.currentUser
	}
}

export default withRouter(connect(mapStateToProps, { 
	updateGoalsFormData,
	createGoal
})(GoalsForm));