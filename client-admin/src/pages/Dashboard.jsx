import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/action/actionCreator";
import { TableRow } from "../components/TableRow";
import { Spinner } from "../components/Spinner";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const { posts, postsLoading } = useSelector((state) => {
    return state.posts;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const tableHead = [
    "title",
    "content",
    "category",
    "createdBy",
    "image",
    "tags",
  ];

  return (
    <div className="flex flex-col p-4 sm:ml-64">
      <div className="flex justify-between mb-5">
        <h1 className="md:text-5xl mb-5">Posts List</h1>
        <Link to={"/posts/create-post"}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Create Post
          </button>
        </Link>
      </div>
      {postsLoading ? (
        <Spinner />
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Content
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Created By
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Tags
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                tableHead={tableHead}
                data={posts}
                loading={postsLoading}
              />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
