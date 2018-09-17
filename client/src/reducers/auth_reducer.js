export default (state = {
    authenticating: false,
    authenticated: false,
    errors: [],
    user: {},
    current_user: ""
}, action) => {
    switch (action.type) {
        case 'AUTHENTICATE_USER':
            return {
                ...state,
                authenticating: true,
                authenticated: false,
                token: action.tokenauthenticate
            }
        case 'USER_AUTHENTICATED':
            return {
                ...state,
                authenticated: true,
                authenticating: false,
                user: action.user,
                current_user: action.user
            }
        case 'AUTHENTICATION_FAILURE':
            return {
                token: null,
                email: "",
                authenticating: false,
                authenticated: false,
                errors: action.errors
            }
        case 'LOGGEDIN':
            return {
                ...state,
                user: action.user,
                authenticated: true
            }
        case 'LOGGEDOUT':
            return {
                ...state,
                token: null,
                authenticated: false,
                authenticating: false,
                user: {}
            }
    default:
        return state
    }
}