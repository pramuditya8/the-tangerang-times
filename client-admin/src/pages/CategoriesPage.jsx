import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/action/actionCreator";
import { Link } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { TableRow } from "../components/TableRow";

export const CategoriesPage = () => {
  const { categories, categoriesLoading } = useSelector((state) => {
    return state.categories;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const tableHead = ["name", "createdAt", "updatedAt"];

  return (
    <div className="flex flex-col p-4 sm:ml-64">
      <div className="flex justify-between mb-5">
        <h1 className="md:text-5xl mb-5">Categories List</h1>
        <Link to={"/categories/create-category"}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Create Category
          </button>
        </Link>
      </div>
      {categoriesLoading ? (
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
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Created At
                </th>
                <th scope="col" className="px-6 py-3">
                  Updated At
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRow data={categories} tableHead={tableHead} />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
