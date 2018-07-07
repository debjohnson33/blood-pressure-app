export const updateMeasurementsFormData = measurementsFormData => {
	return {
		type: 'UPDATED_DATA',
		measurementsFormData
	}
}

export const resetMeasurementsForm = () => {
	return {
		type: 'RESET_MEASUREMENTS_FORM'
	}
}