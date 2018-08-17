import { combineReducers } from "redux";
import { responsiveStateReducer } from 'redux-responsive';
import { routerReducer } from 'react-router-redux';

import { garagesReducer } from './garagesReducer';
import { categoriesReducer } from './categoriesReducer';
import { listsReducer } from './listsReducer'; 
import { reviewsReducer } from './reviewsReducer';
import { authedUserReducer } from './authedUserReducer'; 

const appReducer = combineReducers({
  authedUser: authedUserReducer,
  browser: responsiveStateReducer,
  categories: categoriesReducer,
  reviews: reviewsReducer,
  garages: garagesReducer,
  lists: listsReducer,
  router: routerReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;