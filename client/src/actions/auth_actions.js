import fetch from 'isomorphic-fetch';

const API_URL = "http://localhost:3001/api";

const authSuccess = (user) => {
    return {
        type: 'USER_AUTHENTICATED',
        user: user
    }
}

const userLoggedIn = (user) => {
    return {
        type: 'LOGGEDIN',
        user: user
    }
}

const authFailure = (errors) => {
    return {
        type: 'AUTHENTICATION_FAILURE',
        errors: errors.message
    }
}

export const signupUser = (user) => {
    return dispatch => {
        return fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: user})
        })
            .then(res => res.json())
            .then(response => {
                const token = response["token"];
                localStorage.setItem('Token', token);
                dispatch(authSuccess(response))
            })
            .catch(error => {
                console.log(error);
                dispatch(authFailure(error));
                localStorage.clear();
            })
    }
}

export const authenticate = (credentials) => {
    return dispatch => {
        return fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
            .then(res => res.json())
            .then((response) => {
                if (response.errors) {
                    throw Error(response.errors);
                } else if (response.token) {
                    const token = response.token;
                    localStorage.setItem('Token', token);
                    dispatch(authSuccess(response));
                }
            })
                .catch( error => {
                    console.log(error);
                    dispatch(authFailure(error));
                    localStorage.clear()
                })
    }
}

export const getUser = (token) => {
    return dispatch => {
        return fetch(`${API_URL}/find_user`, {
            method: 'POST',
            headers: {
                'Authorization': localStorage.Token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token: token})
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.errors) {
                    throw Error(response.errors);
                } else {
                    dispatch(userLoggedIn(response))
                }
            })
            .catch((error) => {
                console.log(error)
                localStorage.clear()
            })
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.clear();
        return dispatch({type: 'LOGGEDOUT'});
    }
}