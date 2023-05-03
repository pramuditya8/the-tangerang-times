import { baseUrl } from "../../config/api";
import {
  POSTS_SUCCESS,
  POSTS_DETAILS_SUCCESS,
  POSTS_LOADING,
} from "./actionType";

export const postsFetch = (payload) => {
  return {
    type: POSTS_SUCCESS,
    payload,
  };
};

export const postDetailsFetch = (payload) => {
  return {
    type: POSTS_DETAILS_SUCCESS,
    payload,
  };
};

export const postsLoading = (payload) => {
  return {
    type: POSTS_LOADING,
    payload,
  };
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(postsLoading(true));
      const res = await fetch(baseUrl + "/posts");
      if (!res.ok) {
        throw await res.text();
      }
      const value = await res.json();

      dispatch(postsFetch(value));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(postsLoading(false));
    }
  };
};

export const fetchPostDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(postsLoading(true));
      const res = await fetch(baseUrl + `/posts/${id}`);
      if (!res.ok) {
        throw await res.text();
      }
      const value = await res.json();

      dispatch(postDetailsFetch(value));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(postsLoading(false));
    }
  };
};
