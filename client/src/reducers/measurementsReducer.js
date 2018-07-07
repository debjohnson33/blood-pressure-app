export default (state = [], action) => {
	switch (action.type) {
		case 'MEASUREMENTS_FETCH_DATA_SUCCESS':
			return action.measurements;
		case 'ADD_MEASUREMENT_SUCCESS':
			return state.concat(action.measurement)
		default:
			return state;
	}
};