import { combineReducers, createStore } from "redux";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;
const store = createStore(combineReducers({}), enhancer);

export default store;
