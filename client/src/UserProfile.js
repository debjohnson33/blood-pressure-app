import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MeasurementsForm from './MeasurementsForm';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        const editMode = false;
        this.state = editMode;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(`users/${this.props.user.id}/measurements`)
    } 

    render() {
        return (
            <div>

                <h2>{this.props.user.email}</h2>
                <p>{this.props.user.id}</p>
                <button onClick={(e) => this.handleSubmit(e) }>To Measurements Page</button>
                <MeasurementsForm user={this.props.user} editMode={this.state.editMode}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth.currentUser
	});
};

export default withRouter(connect(mapStateToProps, {})(UserProfile));