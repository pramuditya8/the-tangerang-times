import React from "react";
import { Form } from "../components/Form";

export const AdminRegisterPage = () => {
  const formData = [
    { label: "Username (optional)", name: "username", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Phone Number (optional)", name: "phoneNumber", type: "number" },
    { label: "Address (optional)", name: "address", type: "textarea" },
  ];

  return (
    <div className="flex flex-col p-4 sm:ml-64">
      <h1 className="md:text-5xl mb-5">Register New Admin</h1>
      <Form formData={formData} />
    </div>
  );
};
