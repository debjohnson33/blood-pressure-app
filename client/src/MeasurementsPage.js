import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMeasurements } from './actions/measurements';

class MeasurementsPage extends Component {

	componentDidMount() {
		this.props.fetchMeasurements();
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<h1>Measurements Go Here!</h1>
				{this.props.systolic_bp}
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