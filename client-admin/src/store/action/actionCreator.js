import { baseUrl } from "../../config/api";
import {
  POSTS_SUCCESS,
  POSTS_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES_LOADING,
  USERS_LOADING,
  USERS_ERROR,
  CATEGORIES_DETAILS_SUCCESS,
  POSTS_DETAILS_SUCCESS,
} from "./actionType";

export const postsFetch = (payload) => {
  return {
    type: POSTS_SUCCESS,
    payload,
  };
};

export const postFetch = (payload) => {
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

export const categoriesFetch = (payload) => {
  return {
    type: CATEGORIES_SUCCESS,
    payload,
  };
};

export const categoryFetch = (payload) => {
  return {
    type: CATEGORIES_DETAILS_SUCCESS,
    payload,
  };
};

export const categoriesLoading = (payload) => {
  return {
    type: CATEGORIES_LOADING,
    payload,
  };
};

export const usersLoading = (payload) => {
  return {
    type: USERS_LOADING,
    payload,
  };
};

export const usersError = (payload) => {
  return {
    type: USERS_ERROR,
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
      // console.log(error);
    } finally {
      dispatch(postsLoading(false));
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(categoriesLoading(true));
      const res = await fetch(baseUrl + "/categories", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      if (!res.ok) {
        throw await res.text();
      }
      const value = await res.json();

      dispatch(categoriesFetch(value));
    } catch (error) {
      // console.log(error);
    } finally {
      dispatch(categoriesLoading(false));
    }
  };
};

export const login = (data, navigate) => {
  return async (dispatch, getState) => {
    try {
      dispatch(usersLoading(true));
      const res = await fetch(baseUrl + "/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw await res.text();
      }
      const value = await res.json();
      localStorage.access_token = value.access_token;
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: JSON.parse(error).message,
      });
    } finally {
      dispatch(usersLoading(false));
    }
  };
};

export const register = (data, navigate) => {
  return async (dispatch, getState) => {
    try {
      dispatch(usersLoading(true));
      const res = await fetch(baseUrl + "/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw await res.text();
      }
      const value = await res.json();
      navigate("/admin-register");

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Account created succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: JSON.parse(error).message,
      });
    } finally {
      dispatch(usersLoading(false));
    }
  };
};

export const signOut = (navigate) => {
  return async (dispatch, getState) => {
    localStorage.clear();
    navigate("/login");
  };
};

export const createCategory = (data, navigate) => {
  return async (dispatch, getState) => {
    try {
      dispatch(categoriesLoading(true));
      const res = await fetch(baseUrl + "/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw await res.text();
      }

      navigate("/categories");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Category created succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: JSON.parse(error).message,
      });
    } finally {
      dispatch(categoriesLoading(false));
    }
  };
};

export const fetchCategory = (params) => {
  const { id } = params;
  return async (dispatch, getState) => {
    try {
      dispatch(categoriesLoading(true));
      const res = await fetch(baseUrl + "/categories/" + id, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      if (!res.ok) {
        throw await res.text();
      }
      const value = await res.json();
      dispatch(categoryFetch(value));
    } catch (error) {
      // console.log(error);
    } finally {
      dispatch(categoriesLoading(false));
    }
  };
};

export const editCategory = (params, data, navigate) => {
  const { id } = params;
  return async (dispatch, getState) => {
    try {
      dispatch(categoriesLoading(true));
      const res = await fetch(baseUrl + "/categories/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw await res.text();
      }
      navigate("/categories");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Category edited succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: JSON.parse(error).message,
      });
    } finally {
      dispatch(categoriesLoading(false));
    }
  };
};

export const deleteCategory = (id, navigate) => {
  return async (dispatch, getState) => {
    try {
      dispatch(categoriesLoading(true));
      const res = await fetch(baseUrl + "/categories/" + id, {
        method: "DELETE",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      if (!res.ok) {
        throw await res.text();
      }
      navigate("/categories");
      dispatch(fetchCategories());
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Category Deleted succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: JSON.parse(error).message,
      });
    } finally {
      dispatch(categoriesLoading(false));
    }
  };
};

export const createPost = (data, navigate) => {
  return async (dispatch, getState) => {
    try {
      dispatch(categoriesLoading(true));
      const res = await fetch(baseUrl + "/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw await res.text();
      }

      navigate("/");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Post Created succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: JSON.parse(error).message,
      });
    } finally {
      dispatch(categoriesLoading(false));
    }
  };
};

export const fetchPost = (params) => {
  const { id } = params;
  return async (dispatch, getState) => {
    try {
      dispatch(postsLoading(true));
      const res = await fetch(baseUrl + "/posts/" + id, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      if (!res.ok) {
        throw await res.text();
      }
      const value = await res.json();
      dispatch(postFetch(value));
    } catch (error) {
      // console.log(error);
    } finally {
      dispatch(postsLoading(false));
    }
  };
};

export const editPost = (params, data, navigate) => {
  const { id } = params;
  return async (dispatch, getState) => {
    try {
      dispatch(postsLoading(true));
      const res = await fetch(baseUrl + "/posts/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw await res.text();
      }
      navigate("/");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Post edited succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: JSON.parse(error).message,
      });
    } finally {
      dispatch(postsLoading(false));
    }
  };
};

export const deletePost = (id, navigate) => {
  return async (dispatch, getState) => {
    try {
      dispatch(postsLoading(true));
      const res = await fetch(baseUrl + "/posts/" + id, {
        method: "DELETE",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      if (!res.ok) {
        throw await res.text();
      }
      navigate("/");
      dispatch(fetchPosts());
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Post Deleted succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: JSON.parse(error).message,
      });
    } finally {
      dispatch(postsLoading(false));
    }
  };
};
