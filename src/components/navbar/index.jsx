import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
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
  const { pathname } = useLocation();

  const isHomePage = Boolean(pathname === "/");

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
    <nav>
      <Box
        position={isHomePage ? "fixed" : "absolute"}
        top="0px"
        left="0"
        right="0"
        zIndex="3"
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            transition: "background-color 0.5s ease",
            ...(isHomePage
              ? {
                  backgroundColor: scrollDown_0 ? "#fff" : "transparent",
                  borderBottom: is_screen_sm
                    ? "1px solid #e4e5e7"
                    : scrollDown_0
                    ? "1px solid #e4e5e7"
                    : "none",
                }
              : {
                  backgroundColor: "#fff",
                  borderBottom: "1px solid #e4e5e7",
                }),
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
                    ...(isHomePage
                      ? {
                          color: is_screen_sm
                            ? "#404145"
                            : scrollDown_0
                            ? "#404145"
                            : "white",
                        }
                      : {
                          color: "#404145",
                        }),
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
                    !isHomePage
                      ? "#404145"
                      : is_screen_sm
                      ? "#404145"
                      : scrollDown_0
                      ? "#404145"
                      : "white"
                  }
                />
                <Link to="/join" style={{ textDecoration: "none" }}>
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
                </Link>
              </Box>
              <Searchbar
                activeOnScroll={scrollDown_130}
                isHomePage={isHomePage}
              />
              <NavbarButtons
                activeOnScroll={scrollDown_0}
                isHomePage={isHomePage}
              />
            </Box>
          </Box>
        </Box>
        <NavbarCategoryTabs
          activeOnScroll={scrollDown_130}
          isHomePage={isHomePage}
        />
        <Drawer
          drawerOpen={drawerOpen}
          handleOpenCloseDrawer={handleOpenCloseDrawer}
        />
      </Box>
    </nav>
  );
};

export default Navbar;
