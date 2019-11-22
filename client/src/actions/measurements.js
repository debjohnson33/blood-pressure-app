import fetch from 'isomorphic-fetch';
//import { BrowserRouter } from 'react-router-dom';
import { resetMeasurementsForm } from './measurementsForm';

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

export const destroyMeasurement = measurementId => {
	return {
		type: 'DELETE_MEASUREMENT_SUCCESS',
		measurementId
	}
}

export const fetchMeasurements = () => {
	return dispatch => {
		return fetch(`${API_URL}/measurements`, {
			headers: {
				"Authorization": `Bearer ${localStorage.token}`, 
			},
		})
			.then(response => response.json())
			.then(measurements => {
				dispatch(measurementsFetchDataSuccess(measurements));
			})
			.catch(error => console.log(error));
	};
};

export const createMeasurement = (user_id, measurement) => {
	return dispatch => {
		return fetch(`${API_URL}/measurements`, {
			method: 'POST',
			headers: {
				"Authorization": `Bearer ${localStorage.token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ measurement: measurement })
		})
			.then(response => response.json())
			.then(measurement => {
				dispatch(addMeasurements(measurement))
				dispatch(resetMeasurementsForm())
			})
			.catch(error => console.log(error))
	}
}

export const deleteMeasurement = (measurementId) => {
	return dispatch => {
		return fetch(`${API_URL}/measurements/${measurementId}`, {
			method: 'DELETE',
			headers: {
				"Authorization": `Bearer ${localStorage.token}`, 
			},
		})
			.then(response => response.json())
			.then(() => {
				dispatch(destroyMeasurement(measurementId))
			})
			.catch(error => console.log(error))
	}
}