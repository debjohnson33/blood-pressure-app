export default (state = {}, action) => {
	switch (action.type) {
		case 'MEASUREMENTS_FETCH_DATA_SUCCESS':
			return action.measurements;
		case 'ADD_MEASUREMENT_SUCCESS':
			console.log(action.payload);
			return {...state, measurements: {...state.measurements, [action.payload.userId]: action.payload } };
		case 'DELETE_MEASUREMENT_SUCCESS':
			return state.filter(measurement => measurement.id !== +action.measurementId);
		default:
			return state;
	}
};