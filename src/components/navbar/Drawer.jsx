import { Drawer, Box, Button } from "@mui/material";

import DrawerList from "./DrawerList";

const DrawerCom = ({ drawerOpen, handleOpenCloseDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={handleOpenCloseDrawer}
      sx={{
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
        >
          Join Fiverr
        </Button>
        <DrawerList />
      </Box>
    </Drawer>
  );
};

export default DrawerCom;
