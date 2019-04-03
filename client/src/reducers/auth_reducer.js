export default (state = {
    authenticating: false,
    authenticated: false,
    errors: [],
    token: null,
    currentUser: {}
}, action) => {
    switch (action.type) {
        case 'AUTHENTICATION_REQUEST':
            return {
                ...state,
                authenticating: true
            }
        case 'AUTHENTICATION_SUCCESS':
            return {
                ...state,
                authenticated: true,
                authenticating: false,
                token: action.token,
                currentUser: action.user
            }
        case 'AUTHENTICATION_FAILURE':
            return {
                token: null,
                currentUser: {},
                authenticating: false,
                authenticated: false,
                errors: action.errors || []
            }
        case 'LOGGEDOUT':
            return {
                ...state,
                token: null,
                authenticated: false,
                authenticating: false,
                currentUser: {}
            }
    default:
        return state
    }
}