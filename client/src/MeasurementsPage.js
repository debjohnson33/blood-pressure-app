import React, { Component } from 'react';
import { connect } from 'react-redux';
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

	render() {
			const { user, measurements } = this.props;
			console.log(measurements);
			let renderMeasurements;
			const userId = parseInt(user.userId, 10);
			if (this.props.measurements.length > 0) {
				renderMeasurements = this.props.measurements.map((measurement, index) => {
					return <li style={{listStyleType: "none"}} key={index}>{measurement.id} - {measurement.systolic_bp} / {measurement.diastolic_bp}</li>
				});
			} else {
				return "No Measurements"
			}
			
		return (
			<div>
				<h1>Measurements for {this.props.user.email}</h1>
				<div>
					<ul>{renderMeasurements}</ul>
				</div>
				
				{/* <div>
				{Object.keys(measurements).map(function(measurementName, measurementIndex) {
					<div>
						<p key={measurementIndex}>{measurementName}</p>
						<p> {measurements[measurementName]} </p>
					</div>
				})
				} 
				</div> */}
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

export default connect(mapStateToProps, { fetchMeasurements })(MeasurementsPage);