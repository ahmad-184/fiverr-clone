import { useState } from "react";
import {
  Box,
  Button,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/MenuRounded";

import Logo from "../Logo";

import Searchbar from "./Searchbar";
import Drawer from "./Drawer";
import NavbarButtons from "./NavbarButtons";
import NavbarCategoryTabs from "./NavbarCategoryTabs";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState();
  const theme = useTheme();

  const scrollDown_0 = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });
  const scrollDown_130 = useScrollTrigger({
    threshold: 130,
    disableHysteresis: true,
  });

  const is_screen_sm = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenCloseDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <Box position="fixed" top="0px" left="0" right="0" zIndex="3">
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          transition: "background-color 0.5s ease",
          backgroundColor: scrollDown_0 ? "#fff" : "transparent",
          borderBottom: is_screen_sm
            ? "1px solid #e4e5e7"
            : scrollDown_0
            ? "1px solid #e4e5e7"
            : "none",
          [theme.breakpoints.down("sm")]: {
            backgroundColor: "#fff",
            borderBottom: "none",
          },
        }}
      >
        <Box display="flex" justifyContent="center" p="1rem 1.8rem">
          <Box
            display="flex"
            gap={4}
            justifyContent="space-between"
            maxWidth="1350px"
            width="100%"
            alignItems="center"
          >
            <Box
              display="flex"
              gap={1.3}
              alignItems="center"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                  justifyContent: "space-between",
                },
              }}
            >
              <MenuIcon
                onClick={handleOpenCloseDrawer}
                sx={{
                  fontSize: "35px",
                  color: is_screen_sm
                    ? "#404145"
                    : scrollDown_0
                    ? "#404145"
                    : "white",
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "none",
                    xl: "none",
                  },
                }}
              />
              <Logo
                color={
                  is_screen_sm ? "#404145" : scrollDown_0 ? "#404145" : "white"
                }
              />
              <Button
                variant="text"
                sx={{
                  display: {
                    xs: "block",
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                  textTransform: "capitalize",
                  color: "grey.700",
                  backgroundColor: "transparent !important",
                  fontWeight: "bold",
                  fontSize: "17px",
                  "&:hover": {
                    color: "grey.500",
                  },
                }}
                disableRipple
              >
                Join
              </Button>
            </Box>
            <Searchbar activeOnScroll={scrollDown_130} />
            <NavbarButtons activeOnScroll={scrollDown_0} />
          </Box>
        </Box>
      </Box>
      <NavbarCategoryTabs activeOnScroll={scrollDown_130} />
      <Drawer
        drawerOpen={drawerOpen}
        handleOpenCloseDrawer={handleOpenCloseDrawer}
      />
    </Box>
  );
};

export default Navbar;
