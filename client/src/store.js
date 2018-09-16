import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import measurementsReducer from './reducers/measurementsReducer';
import measurementsFormData from './reducers/measurementsFormData';
import auth_reducer from './reducers/auth_reducer';

const reducers = combineReducers({
	auth: auth_reducer,
	measurements: measurementsReducer,
	measurementsFormData
})

const middleware = [thunk];

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(...middleware)
);