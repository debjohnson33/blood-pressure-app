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
			const { measurements } = this.props;
			//const userId = parseInt(this.state.userId, 10);
		return (
			<div>
				<h1>Measurements for {this.state.email}</h1>
				<div>
				{Object.keys(measurements).map(function(measurementName, measurementIndex) {
					<div>
						<p key={measurementIndex}>{measurementName.id}</p>
						<p> {measurements.systolic_bp} </p>
					</div>
				})
				} 
				</div>
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