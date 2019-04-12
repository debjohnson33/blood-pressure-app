import React, { Component } from 'react';
import { connect } from 'react-redux';

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