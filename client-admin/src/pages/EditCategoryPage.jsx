import React, { useEffect } from "react";
import { Form } from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/action/actionCreator";
import { useParams } from "react-router-dom";

export const EditCategoryPage = () => {
  const formData = [{ label: "Name", name: "name", type: "text" }];

  const { category, categoriesLoading } = useSelector(
    (state) => state.categories
  );

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchCategory(params));
  }, []);
  // console.log(category);

  return (
    <div className="flex flex-col p-4 sm:ml-64">
      <h1 className="md:text-5xl mb-5">Edit Category</h1>
      <Form formData={formData} value={category} loading={categoriesLoading} />
    </div>
  );
};
