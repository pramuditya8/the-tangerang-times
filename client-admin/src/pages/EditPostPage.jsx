import React, { useEffect } from "react";
import { Form } from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchPost } from "../store/action/actionCreator";
import { useParams } from "react-router-dom";

export const EditPostPage = () => {
  const formData = [
    { label: "Title", name: "title", type: "text" },
    { label: "Content", name: "content", type: "textarea" },
    { label: "Category", name: "categoryId", type: "select" },
    { label: "Image", name: "imgUrl", type: "text" },
  ];

  const { categories, categoriesLoading } = useSelector(
    (state) => state.categories
  );
  const { post } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchPost(params));
  }, []);
  // console.log(category);

  return (
    <div className="flex flex-col p-4 sm:ml-64">
      <h1 className="md:text-5xl mb-5">Edit Post</h1>
      <Form
        formData={formData}
        value={{ categories, post }}
        loading={categoriesLoading}
      />
    </div>
  );
};
