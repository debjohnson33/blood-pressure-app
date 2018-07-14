import React, { Component } from 'react';
import Datetime from 'react-datetime';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { updateMeasurementsFormData } from './actions/measurementsForm';
import { createMeasurement } from './actions/measurements';

import './react-datetime.css';

class MeasurementsForm extends Component {

	constructor() {
		super();
		this.state = {email: undefined, userId: undefined};
		this.handleDate = this.handleDate.bind(this);
	}

	componentDidMount() {
		let jwt = window.localStorage.getItem('jwt');
		let result = jwtDecode(jwt);
		console.log(result);
		this.setState({email: result.email, userId: result.id})
	}

	handleOnChange = event => {
		const { name, value } = event.target;
		const currentMeasurementsFormData = Object.assign({}, this.props.measurementsFormData, {
			[name]: value
		})
		this.props.updateMeasurementsFormData(currentMeasurementsFormData)
	}

	handleDate(date) {
		console.log(date._d);
		const currentMeasurementsFormData = Object.assign({}, this.props.measurementsFormData, {
			date_time: date._d
		})
		this.props.updateMeasurementsFormData(currentMeasurementsFormData)
	}

	handleOnSubmit = event => {
		event.preventDefault();
		this.props.createMeasurement(this.state.userId, this.props.measurementsFormData);
	}

	render() {

		const  { systolic_bp, diastolic_bp, pulse, date_time, notes } = this.props.measurementsFormData;

		return (
			<div>
			<h4>Add Your Blood Pressure and Pulse: </h4>
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
					<label htmlFor='pulse'>Pulse:</label>
					<input 
						name='pulse'
						onChange={this.handleOnChange} 
						value={pulse} 
						placeholder="Pulse (Heart Rate)"
					/>
				</div>
				<br />
				<div>
					<label htmlFor='dateTime'>Day & Time:</label>
					<Datetime onChange={this.handleDate} />
				</div>
				<br />
				<div>
					<label htmlFor='notes'>Notes:</label>
					<input 
						name='notes' 
						onChange={this.handleOnChange}
						value={notes} 
						placeholder="Notes (Left arm/Right Arm, etc)"
					/>
				</div>
				<br />
				<button type="submit">Add Measurements</button>
			</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		measurementsFormData: state.measurementsFormData
	}
}

export default connect(mapStateToProps, { 
	updateMeasurementsFormData,
	createMeasurement
})(MeasurementsForm);