import fetch from 'isomorphic-fetch';

//import { resetGoalsForm } from './goalsForm';

const API_URL = "http://localhost:3001/api";

export const goalsFetchDataSuccess = goals => {
	return {
		type: 'GOALS_FETCH_DATA_SUCCESS',
		goals
	}
}

export const addGoals = goal => {
	return {
		type: 'ADD_GOALS_SUCCESS',
		goal: goal
	}
}

export const destroyGoal = goalId => {
	return {
		type: 'DELETE_GOAL_SUCCESS',
		goalId
	}
}

export const fetchGoals = () => {
	return dispatch => {
		return fetch(`${API_URL}/goals`, {
			headers: {
				"Authorization": `Bearer ${localStorage.token}`, 
			},
		})
			.then(response => response.json())
			.then(goals => {
				dispatch(goalsFetchDataSuccess(goals));
			})
			.catch(error => console.log(error));
	};
};

export const createGoal = (user_id, goal) => {
	return dispatch => {
		return fetch(`${API_URL}/goals`, {
			method: 'POST',
			headers: {
				"Authorization": `Bearer ${localStorage.token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ goal: goal })
		})
			.then(response => response.json())
			.then(goal => {
				dispatch(addGoals(goal))
				dispatch(resetGoalsForm())
			})
			.catch(error => console.log(error))
	}
}

export const deleteGoal = (goalId) => {
	return dispatch => {
		return fetch(`${API_URL}/goals/${goalId}`, {
			method: 'DELETE',
			headers: {
				"Authorization": `Bearer ${localStorage.token}`, 
			},
		})
			.then(response => response.json())
			.then(() => {
				dispatch(destroyGoal(goalId))
			})
			.catch(error => console.log(error))
	}
}