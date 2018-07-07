import React, { Component } from 'react';
import Datetime from 'react-datetime';
import { connect } from 'react-redux';
import { updateMeasurementsFormData } from './actions/measurementsForm';

import './react-datetime.css';

class MeasurementsForm extends Component {

	constructor() {
		super();
		this.state = {selectedValue: ''};
		//this.handleDate = this.handleDate.bind(this);
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
	}

	handleOnSubmit = event => {
		event.preventDefault();
		console.log(event.target);
	}

	render() {

		const  { systolic_bp, diastolic_bp, pulse, dateTime, notes } = this.props.measurementsFormData;

		return (
			<div>
			<h4>Add Your Blood Pressure and Pulse:</h4>
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
					<Datetime value={this.state.selectedValue} onChange={this.handleDate} />
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

export default connect(mapStateToProps, { updateMeasurementsFormData })(MeasurementsForm);