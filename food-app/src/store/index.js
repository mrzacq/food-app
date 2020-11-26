import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import detailReducer from './reducers/detailReducer'
import favorReducer from './reducers/favorReducer'
import restaurantReducer from './reducers/restaurantreducer'

const reducer = combineReducers({
  detailReducer, favorReducer, restaurantReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
