const initialState = {
	systolic_bp: '',
	diastolic_bp: '',
	pulse: '',
	date_time: '',
	notes: ''
}
export default (state = initialState, action) => {

	switch(action.type) {
		case 'UPDATED_DATA':
			return action.measurementsFormData
		case 'RESET_MEASUREMENTS_FORM':
			return initialState;
		default:
			return state;
	}
}