import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import postsReducers from "./reducers/postsReducers";

const mainReducer = combineReducers({
  posts: postsReducers
}); 

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store; 