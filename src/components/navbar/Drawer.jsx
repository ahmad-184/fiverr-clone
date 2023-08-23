import { Drawer, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import DrawerList from "./DrawerList";

const DrawerCom = ({ drawerOpen, handleOpenCloseDrawer }) => {
  const navigate = useNavigate();
  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={handleOpenCloseDrawer}
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "block",
          lg: "none",
          xl: "none",
        },
        "& .MuiDrawer-paper": {
          width: "272px",
          boxShadow: "none",
        },
      }}
    >
      <Box display="flex" flexDirection="column" p="1.3rem 1.3rem" gap={1}>
        <Button
          color="primary"
          size="large"
          variant="contained"
          disableRipple
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
            fontSize: "17px",
            color: "white",
            width: "8.1rem",
            boxShadow: "none !important",
            p: "6px 0px",
          }}
          onClick={() => {
            navigate("/join");
            handleOpenCloseDrawer();
          }}
        >
          Join Fiverr
        </Button>
        <DrawerList />
      </Box>
    </Drawer>
  );
};

export default DrawerCom;
