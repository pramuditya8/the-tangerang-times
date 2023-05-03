import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteCategory, deletePost } from "../store/action/actionCreator";

export const TableRow = ({ data, tableHead }) => {
  // console.log(data);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = useLocation();

  // console.log(path);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        if (path.pathname === "/categories") {
          dispatch(deleteCategory(id, navigate));
        }
        if (path.pathname === "/") {
          dispatch(deletePost(id, navigate));
        }
      }
    });
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <tr
            key={item.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4">{index + 1}</td>
            {tableHead.map((head, index) => {
              return (
                <td key={index} className="px-6 py-4">
                  <span>
                    {head === "content"
                      ? item[head].length > 100
                        ? item[head].substring(0, 100) + "..."
                        : item[head]
                      : item[head]}
                    {head === "category" && item["Category"].name}
                    {head === "createdBy" && item["User"].username}
                    {head === "image" && (
                      <img
                        src={item["imgUrl"]}
                        alt={item["imgUrl"]}
                        className="w-[200px]"
                      />
                    )}
                    {head === "tags" && item["Tags"][0].name}
                  </span>
                </td>
              );
            })}
            <td className="px-6 py-4 text-right">
              <Link
                to={
                  path.pathname === "/"
                    ? `/posts/edit-post/${item.id}`
                    : `/categories/edit-category/${item.id}`
                }
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(item.id)}
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};
