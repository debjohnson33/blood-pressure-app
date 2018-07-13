const initialState = {
	email: '',
	password: ''
}
export default (state = initialState, action) => {

	switch(action.type) {
		case 'UPDATED_DATA':
			return action.loginFormData
		default:
			return state;
	}
}