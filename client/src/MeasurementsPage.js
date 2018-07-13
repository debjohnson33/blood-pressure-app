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
		let jwt = window.localStorage.getItem('jwt');
		let result = jwtDecode(jwt);
		console.log(result);
		this.setState({email: result.email, userId: result.id})
		this.props.fetchMeasurements(this.state.userId);
	}

	render() {
		return (
			<div>
				<h1>Measurements for {this.state.email}</h1>
				{this.props.measurements.map(measurement => 
					<div>
					<p key={measurement.id}>{measurement.id}</p>
					<p>{measurement.systolic_bp} / {measurement.diastolic_bp}</p></div>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		measurements: state.measurements
	});
};

export default connect(mapStateToProps, { fetchMeasurements })(MeasurementsPage);