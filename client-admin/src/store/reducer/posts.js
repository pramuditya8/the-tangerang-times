import {
  POSTS_SUCCESS,
  POSTS_LOADING,
  POSTS_DETAILS_SUCCESS,
} from "../action/actionType";

export default function postReducer(
  state = { posts: [], post: {}, postsLoading: true },
  action
) {
  switch (action.type) {
    case POSTS_SUCCESS:
      return { ...state, posts: action.payload };
    case POSTS_DETAILS_SUCCESS:
      return { ...state, post: action.payload };
    case POSTS_LOADING:
      return { ...state, postsLoading: action.payload };
    default:
      return state;
  }
}
