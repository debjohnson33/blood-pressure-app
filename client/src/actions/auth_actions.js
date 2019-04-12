import fetch from 'isomorphic-fetch';

const API_URL = "http://localhost:3001/api";

const authSuccess = (user, token) => {
    return {
        type: 'AUTHENTICATION_SUCCESS',
        user: user,
        token: token
    }
}

const authRequest = () => {
    return {
        type: 'AUTHENTICATION_REQUEST'
    }
}

const authFailure = (errors) => {
    return {
        type: 'AUTHENTICATION_FAILURE',
        errors: errors.message
    }
}

export const signupUser = (user) => {
    const newUser = user;
    return dispatch => {
        return fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify({user: user})
        })
            .then(res => res.json())
            .then(response => {
                dispatch(authenticate({
                    email: newUser.email,
                    password: newUser.password
                }))
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
        dispatch(authRequest());
        return fetch(`${API_URL}/user_token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({auth: credentials})
        })
            .then(res => res.json())
            .then((response) => {
                if (response.errors) {
                    throw Error(response.errors);
                } else if (response.jwt) {
                    const token = response.jwt;
                    localStorage.setItem('token', token);
                    return getUser(credentials)
                }
            }).then((user) => {
                console.log(user)
                dispatch(authSuccess(user, localStorage.token));
            })
                .catch( error => {
                    console.log(error);
                    dispatch(authFailure(error));
                    localStorage.clear()
                })
    }
}

export const getUser = (credentials) => {
    const request = new Request(`${API_URL}/find_user`, {
        method: 'POST',
        headers: new Headers({
            'Authorization': `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({user: credentials})
    })
    return fetch(request)
        .then((res) => res.json())
        .then(userJson => { return userJson })
        .catch((error) => {
            console.log(error)
            localStorage.clear()
        })

}

export const logout = () => {
    return dispatch => {
        localStorage.clear();
        return dispatch({type: 'LOGGEDOUT'});
    }
}