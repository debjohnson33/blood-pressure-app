import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home';
import MeasurementsPage from './MeasurementsPage';
import MeasurementsForm from './MeasurementsForm';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/measurements' component={MeasurementsPage}/>
              <Route exact path='/measurements/new' component={MeasurementsForm}/>            
            </Switch>          
          </div>
        </Router>
    );
  }
}

export default App;
