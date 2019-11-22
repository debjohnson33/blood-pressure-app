export const updateGoalsFormData = goalsFormData => {
	return {
		type: 'UPDATED_DATA',
		goalsFormData
	}
}

export const resetGoalsForm = () => {
	return {
		type: 'RESET_GOALS_FORM'
	}
}