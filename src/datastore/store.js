import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import { responsiveStoreEnhancer } from 'redux-responsive';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers/rootReducer';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    responsiveStoreEnhancer,
    applyMiddleware(thunk, logger),
  )
);

export default store;