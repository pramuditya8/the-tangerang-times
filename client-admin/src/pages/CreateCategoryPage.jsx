import React from "react";
import { Form } from "../components/Form";

export const CreateCategoryPage = () => {
  const formData = [{ label: "Name", name: "name", type: "text" }];

  return (
    <div className="flex flex-col p-4 sm:ml-64">
      <h1 className="md:text-5xl mb-5">Create Category</h1>
      <Form formData={formData} />
    </div>
  );
};
