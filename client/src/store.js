import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import measurementsReducer from './reducers/measurementsReducer';

const reducers = combineReducers({
	measurements: measurementsReducer
})

const middleware = [thunk];

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(...middleware)
);