import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class GoalsPage extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.history.push('/user_profile');
    }
    
    handleToGoalsFormSubmit = (e) => {
		e.preventDefault();
		this.props.history.push(`/users/${this.props.user.id}/goals/new`)
    }
    
    render () {
        const { goals } = this.props;
        
        if (!goals) {
            return <p>No goals set 	<button onClick={(e) => this.handleToGoalsFormSubmit(e) }>Click Here to Add Your Goals</button> <button onClick={(e) => this.handleSubmit(e) }>To User Profile Page</button>
            </p>
        }
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
}

export default withRouter(GoalsPage);