import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Home from './Home';
import UserProfile from './UserProfile';
import MeasurementsPage from './MeasurementsPage';
import MeasurementsForm from './MeasurementsForm';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import LogoutComponent from './LogoutComponent';
import { getUser } from './actions/auth_actions';
import NavBar from './NavBar';

class App extends Component {

  componentDidMount() {
    // const token = localStorage.token;
    
    // if (token) {
    //   this.props.getUser(token)
    // }
  }

  render() {
    const {authenticated, user} = this.props;
    return (
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/user_profile' component={UserProfile} />
              <Route exact path='/login' component={LoginComponent}/>
              <Route exact path='/signup' component={SignupComponent}/> 
              <Route exact path='/logout' component={LogoutComponent }/>
              <Route exact path='/users/:id/measurements' component={MeasurementsPage}/>
              <Route exact path='/users/:id/measurements/new' component={MeasurementsForm}/>            
            </Switch>          
          </div>
        </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.currentUser,
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps, { getUser })(App);
