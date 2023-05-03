import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
