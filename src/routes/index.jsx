import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home";

import loadable from "../helper/loadable";

const NotFoundPage = loadable(lazy(() => import("../pages/404page")));
const SignupLoginPage = loadable(lazy(() => import("../pages/signup-login")));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/join",
        element: <SignupLoginPage />,
      },
    ],
  },
]);
