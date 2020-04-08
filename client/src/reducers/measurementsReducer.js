export default (state = {}, action) => {
	switch (action.type) {
		case 'MEASUREMENTS_FETCH_DATA_SUCCESS':
			return action.measurements;
		case 'ADD_MEASUREMENT_SUCCESS':
			console.log(action.payload);
			return {...state, measurements: {...state.measurements, [action.payload.userId]: action.payload } };
		case 'DELETE_MEASUREMENT_SUCCESS':
			return state.filter(measurement => measurement.id !== +action.measurementId);
		case 'UPDATE_MEASUREMENT_SUCSSESS':
			return {...state, measurement: action.measurement};
		default:
			return state;
	}
};