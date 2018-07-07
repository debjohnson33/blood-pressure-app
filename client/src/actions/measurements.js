import fetch from 'isomorphic-fetch';

const API_URL = "http://localhost:3001/api";

export const measurementsFetchDataSuccess = measurements => {
	return {
		type: 'MEASUREMENTS_FETCH_DATA_SUCCESS',
		measurements
	}
}

export const addMeasurements = measurement => {
	return {
		type: 'ADD_MEASUREMENTS_SUCCESS',
		measurement: measurement
	}
}

export const fetchMeasurements = () => {
	return dispatch => {
		return fetch(`${API_URL}/users/1/measurements`)
			.then(response => response.json())
			.then(measurements => {
				dispatch(measurementsFetchDataSuccess(measurements));
			})
			.catch(error => console.log(error));
	};
};

export const createMeasurement = measurement => {
	return dispatch => {
		return fetch(`${API_URL}/users/1/measurement`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ measurement: measurement })
		})
			.then(response => response.json())
			.then(measurements => {
				dispatch(addMeasurements(measurement))
			})
	}
}