import React, { useEffect } from "react";
import { Form } from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategories } from "../store/action/actionCreator";

export const CreatePostPage = () => {
  const formData = [
    { label: "Title", name: "title", type: "text" },
    { label: "Content", name: "content", type: "textarea" },
    { label: "Category", name: "categoryId", type: "select" },
    { label: "Image", name: "imgUrl", type: "text" },
    { label: "Tags", name: "tags", type: "select" },
  ];

  const { categories, categoriesLoading } = useSelector(
    (state) => state.categories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="flex flex-col p-4 sm:ml-64">
      <h1 className="md:text-5xl mb-5">Create Post</h1>
      <Form
        formData={formData}
        value={categories}
        loading={categoriesLoading}
      />
    </div>
  );
};
