import { combineReducers } from "redux";
import postReducer from "./posts";
import categoryReducer from "./categories";
import usersReducer from "./users";

export const rootReducer = combineReducers({
  posts: postReducer,
  categories: categoryReducer,
  users: usersReducer,
});
