import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

import initialState from '../reducers/initialState';
import combinedReducers from '../reducers';

const store = createStore(combinedReducers, initialState, applyMiddleware(thunk, reduxLogger));

window.s = () => store.getState();

export default store;
