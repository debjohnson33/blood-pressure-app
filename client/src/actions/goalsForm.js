export const updateGoalsFormData = goalsFormData => {
	return {
		type: 'UPDATED_GOALS',
		goalsFormData
	}
}

export const resetGoalsForm = () => {
	return {
		type: 'RESET_GOALS_FORM'
	}
}