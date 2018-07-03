import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home';
import MeasurementsPage from './MeasurementsPage';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path="/measurements" component={MeasurementsPage}/>
            </Switch>          
          </div>
        </Router>
    );
  }
}

export default App;
