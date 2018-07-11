import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMeasurements } from './actions/measurements';

class MeasurementsPage extends Component {

	componentDidMount() {
		let jwt = window.localStorage.getItem('jwt');
		console.log(jwt);
		this.props.fetchMeasurements();
		console.log(this.props);

	}

	render() {
		return (
			<div>
				<h1>Measurements Go Here!</h1>
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