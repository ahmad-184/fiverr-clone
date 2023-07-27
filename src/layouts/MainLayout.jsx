import { Outlet } from "react-router-dom";

import { Navbar } from "../components";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Box paddingTop="7rem">
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
