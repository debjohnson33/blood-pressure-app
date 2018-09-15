import fetch from 'isomorphic-fetch';

const API_URL = "http://localhost:3001/api";

const authSuccess = (user) => {
    return {
        type: 'USER_AUTHENTICATED',
        user: user
    }
}

export const authenticate = (credentials) => {
    return dispatch => {
        return fetch(`${API_URL}/create`, {
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
                    //dispatch(authFailure(error));
                    localStorage.clear()
                })
    }
}