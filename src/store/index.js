import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import auth from "./reducer/auth";
import thunk from "redux-thunk";
const middleware = [thunk];
const reducer = combineReducers({ user: auth });
const store = createStore(reducer,applyMiddleware(...middleware));
export default store;
