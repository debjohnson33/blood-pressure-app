import React, { Component } from 'react';
import { connect } from 'react-redux';

import MeasurementsPage from './MeasurementsPage';

class UserProfile extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: this.props.user
    //     }
    // }

    render() {
        return (
            <div>

                <h2>{this.props.user.email}</h2>
                <MeasurementsPage user={this.props.user}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth.currentUser
	});
};

export default connect(null, null)(UserProfile);