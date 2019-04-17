import React, { Component } from 'react';
import { connect } from 'react-redux';

import MeasurementsForm from './MeasurementsForm';
import MeasurementsPage from './MeasurementsPage';

class UserProfile extends Component {

    render() {
        return (
            <div>

                <h2>{this.props.user.email}</h2>
                <MeasurementsForm user={this.props.user} />
                <MeasurementsPage user={this.props.user} measurements={this.props.user.measurements}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth.currentUser
	});
};

export default connect(mapStateToProps, null)(UserProfile);