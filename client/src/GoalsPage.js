import React, { Component } from 'react';

const GoalsPage = ({goals}) => {
	return(
		<div>
			
	        <h1 className="App-title">Goals:</h1>
            <p>Systolic: {goals.systolic_bp}</p>
            <p>Diastolic: {goals.diastolic_bp}</p>
            <p>Frequency: {goals.frequency}</p>
	        <br />

		</div>
	)
}

export default GoalsPage;