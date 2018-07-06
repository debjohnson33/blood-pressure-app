import React, { Component } from 'react';

class MeasurementsForm extends Component {

	render() {

		return (
			<div>
			<h4>Add Your Blood Pressure and Pulse:</h4>
			<form>
				<div>
					<label htmlFor='systolicBloodPressure'>Systolic Blood Pressure:</label>
					<input name='systolicBloodPressure' placeholder="Systolic BP (Top Number)"/>
				</div>
				<br />
				<div>
					<label htmlFor='diastolicBloodPressure'>Diastolic Blood Pressure:</label>
					<input name='diastolicBloodPressure' placeholder="Diastolic BP (Bottom Number)"/>
				</div>
				<br />
				<div>
					<label htmlFor='pulse'>Pulse:</label>
					<input name='pulse' placeholder="Pulse (Heart Rate)"/>
				</div>
				<br />
				<div>
					<label htmlFor='dateTime'>Day & Time:</label>
					<input name='dateTime' placeholder="Date and Time Taken"/>
				</div>
				<br />
				<div>
					<label htmlFor='notes'>Notes:</label>
					<input name='notes' placeholder="Notes (Left arm/Right Arm, etc)"/>
				</div>
				<br />
			</form>
			</div>
		)
	}
}

export default MeasurementsForm;