import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex-col text-center">
        <h1 className=" text-4xl">Page Not Found</h1>
        <br />
        <Link to={"/"} className=" text-blue-600">
          Back to home
        </Link>
      </div>
    </div>
  );
};
