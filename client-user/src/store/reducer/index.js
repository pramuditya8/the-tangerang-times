import { combineReducers } from "redux";
import postReducer from "./posts";

export const rootReducer = combineReducers({
  posts: postReducer,
});
