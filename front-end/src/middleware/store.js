import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from './reducers';
import epic from './epics';

const epicMiddleware = createEpicMiddleware(epic),
  middlewares = [epicMiddleware];

let store = null;

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
  let { logger } = require('redux-logger');
  middlewares.push(logger);
}
store = createStore(reducer, applyMiddleware(...middlewares));

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
  console.log(store.getState());
}

export default store;
