import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import auth from "./reducer/auth";
import thunk from "redux-thunk";
const middleware = [thunk];
const reducer = combineReducers({ user: auth });
const store = createStore(reducer,compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(...middleware)));
export default store;
