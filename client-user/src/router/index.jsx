import { createBrowserRouter, Link } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PostDetailsPage } from "../pages/PostDetailsPage";
import { Layout } from "../components/Layout";
import { NotFound } from "../components/NotFound";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/details/:id",
        element: <PostDetailsPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
