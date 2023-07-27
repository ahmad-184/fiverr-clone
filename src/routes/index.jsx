import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
