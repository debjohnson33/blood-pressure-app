import React, { Component } from 'react';

class MeasurementsPage extends Component {

	componentDidMount() {
		this.props.fetchMeasurements();
	}

	render() {
		return (
			<div>
				<h1>Measurements Go Here!</h1>
			</div>
		)
	}
}

export default MeasurementsPage;