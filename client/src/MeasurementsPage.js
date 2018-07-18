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
		console.log(result.id)
		this.props.fetchMeasurements(result.id);
	}

	render() {
			const { measurements } = this.props;
			console.log(measurements);
			//const userId = parseInt(this.state.userId, 10);
		return (
			<div>
				<h1>Measurements for {this.state.email}</h1>
				<div>
				{Object.keys(measurements).map(function(measurementName, measurementIndex) {
					<div>
						<p key={measurementIndex}>{measurementName}</p>
						<p> {measurements[measurementName]} </p>
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