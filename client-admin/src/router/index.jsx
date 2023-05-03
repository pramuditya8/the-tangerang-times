import { createBrowserRouter, redirect, useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Dashboard } from "../pages/Dashboard";
import { CategoriesPage } from "../pages/CategoriesPage";
import { LoginPage } from "../pages/LoginPage";
import { CreateCategoryPage } from "../pages/CreateCategoryPage";
import { EditCategoryPage } from "../pages/EditCategoryPage";
import { AdminRegisterPage } from "../pages/AdminRegisterPage";
import { CreatePostPage } from "../pages/CreatePostPage";
import { EditPostPage } from "../pages/EditPostPage";
import { NotFound } from "../components/NotFound";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      } else {
        return null;
      }
    },
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/categories/create-category",
        element: <CreateCategoryPage />,
      },
      {
        path: "/categories/edit-category/:id",
        element: <EditCategoryPage />,
      },
      {
        path: "/posts/create-post",
        element: <CreatePostPage />,
      },
      {
        path: "/posts/edit-post/:id",
        element: <EditPostPage />,
      },
      {
        path: "/admin-register",
        element: <AdminRegisterPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      } else {
        return null;
      }
    },
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
