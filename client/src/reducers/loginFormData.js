const initialState = {
	email: '',
	password: ''
}
export default (state = initialState, action) => {

	switch(action.type) {
		case 'UPDATED_LOGIN':
			return action.loginFormData
		default:
			return state;
	}
}