import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { Navbar } from "../components";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
