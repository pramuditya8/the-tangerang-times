import {
  POSTS_DETAILS_SUCCESS,
  POSTS_SUCCESS,
  POSTS_LOADING,
} from "../action/actionType";

export default function postReducer(
  state = { posts: [], postDetails: {}, loading: true },
  action
) {
  switch (action.type) {
    case POSTS_SUCCESS:
      return { ...state, posts: action.payload };
    case POSTS_DETAILS_SUCCESS:
      return { ...state, postDetails: action.payload };
    case POSTS_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
