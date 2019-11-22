import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import measurementsReducer from './reducers/measurementsReducer';
import measurementsFormData from './reducers/measurementsFormData';
import auth_reducer from './reducers/auth_reducer';
import goalsReducer from './reducers/goalsReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
	auth: auth_reducer,
	measurements: measurementsReducer,
	measurementsFormData,
	goals: goalsReducer
})

const middleware = [thunk];

export default createStore(
	reducers,
	composeEnhancer(applyMiddleware(...middleware))
);