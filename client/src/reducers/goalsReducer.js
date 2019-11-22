export default (state = {}, action) => {
	switch (action.type) {
		case 'GOALS_FETCH_DATA_SUCCESS':
			return action.goals;
		case 'ADD_GOAL_SUCCESS':
			console.log(action.payload);
			return {...state, goals: {...state.goals, [action.payload.userId]: action.payload } };
		case 'DELETE_GOAL_SUCCESS':
			return state.filter(goal => goal.id !== +action.goalId);
		default:
			return state;
	}
};