import fetch from 'isomorphic-fetch';

const API_URL = "http://localhost:3001/api";

export const measurementsFetchDataSuccess = measurements => {
	return {
		type: 'MEASUREMENTS_FETCH_DATA_SUCCESS',
		measurements
	}
}

export const fetchMeasurements = () => {
	return dispatch => {
		return fetch(`${API_URL}/measurements`)
			.then(response => response.json())
			.then(measurements => {
				dispatch(measurementsFetchDataSuccess(measurements));
			})
			.catch(error => console.log(error));
	};
};