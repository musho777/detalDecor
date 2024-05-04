import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { thunk } from 'redux-thunk';

const bindMiddleware = middleware => {
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware([thunk]));

export default store;