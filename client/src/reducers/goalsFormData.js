const initialState = {
	systolic_bp: '',
	diastolic_bp: '',
	frequency: ''
}
export default (state = initialState, action) => {

	switch(action.type) {
		case 'UPDATED_DATA':
			return action.measurementsFormData
		case 'RESET_GOALS_FORM':
			return initialState;
		default:
			return state;
	}
}