import React from "react";
import { Post } from "../components/Post";
import { Header } from "../components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/action/actionCreator";
import { useLocation } from "react-router-dom";

export const HomePage = () => {
  const { posts, loading } = useSelector((state) => {
    return state.posts;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const location = useLocation();
  console.log(location);

  return (
    <>
      {!location?.search && <Header data={posts} loading={loading} />}
      <div className="mt-16">
        <Post data={posts} loading={loading} />
      </div>
    </>
  );
};
