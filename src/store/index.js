import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import postsReducer from "./postsStore/reducer";
import postsCommentsReducer from "./commetsStore/reducer";
import userReducer from "./user/reducer";
import ReduxThunk from "redux-thunk";

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
//   ? window.__REDUX_DEVTOOLS_EXTENSION__()
//   : (x) => x;
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(
  combineReducers({
    postsReducer: postsReducer,
    postsCommentsReducer: postsCommentsReducer,
    userReducer: userReducer,
  }),
  enhancer
);

export default store;
