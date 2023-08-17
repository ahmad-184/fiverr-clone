import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { Navbar, Footer } from "../components";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
