import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home";

import loader from "../helper/loader";

const NotFoundPage = lazy(() => import("../pages/404page"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: loader(NotFoundPage),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
