import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

import combinedReducers from '../reducers';

const store = createStore(combinedReducers, {}, applyMiddleware(thunk, reduxLogger));

export default store;
