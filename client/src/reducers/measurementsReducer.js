export default (state = [], action) => {
	switch (action.type) {
		case 'MEASUREMENTS_FETCH_DATA_SUCCESS':
			return action.measurements;
		default:
			return state;
	}
};