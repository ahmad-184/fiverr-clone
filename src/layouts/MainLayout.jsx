import { Outlet } from "react-router-dom";

import { Navbar } from "../components";
import { Box } from "@mui/material";

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
