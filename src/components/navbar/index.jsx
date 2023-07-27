import { useState } from "react";
import {
  Typography,
  Box,
  Button,
  InputBase,
  Divider,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuIcon from "@mui/icons-material/MenuRounded";

import Logo from "./Logo";
import { navbarLinks, categories } from "../../constants/navbar";

import Drawer from "./Drawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState();
  const theme = useTheme();

  const handleOpenCloseDrawer = () => setDrawerOpen((prev) => !prev);

  const screen_md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      position="fixed"
      top="0px"
      left="0"
      right="0"
      borderBottom="2px solid #dbd7d7"
      sx={{ transition: ".4s ease" }}
    >
      <Box
        display="flex"
        justifyContent="center"
        p="1rem 1.8rem"
        // backgroundColor="#1a1b1d"
      >
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
                color: "#404145",
                display: {
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "none",
                  xl: "none",
                },
              }}
            />
            <Logo color="#404145" />
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
          <Box
            width="100%"
            border="1px solid gray"
            display="flex"
            overflow="hidden"
            alignItems="stretch"
            borderRadius={1}
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              flexGrow: "1",
            }}
          >
            <form
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submit form");
              }}
              style={{
                display: "flex",
                width: "100%",
                gap: 5,
              }}
            >
              <InputBase
                placeholder={
                  screen_md
                    ? "Find Services"
                    : "What service are looking for today"
                }
                sx={{
                  fontSize: "16px",
                  color: "black",
                  p: "4px 10px",
                  flexGrow: "1",
                }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0",
                  minWidth: "45px",
                  backgroundColor: "black",
                  padding: "0",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                  },
                }}
              >
                <SearchRoundedIcon sx={{ fontSize: "22px", color: "#fff" }} />
              </Button>
            </form>
          </Box>
          <Box
            justifyContent="space-between"
            gap={3}
            alignItems="center"
            color="#62646a"
            minWidth="fit-content"
            display={{
              xs: "none",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
          >
            {navbarLinks.map((item, index) => (
              <Typography
                variant="body1"
                fontWeight="bold"
                key={index}
                sx={{
                  cursor: "pointer",
                  display: {
                    xs: "none",
                    sm: index === 4 ? "block" : "none",
                    md: index === 2 ? "none" : "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                fontWeight: "800",
                // color: "#fff",
                // border: "1px solid #fff",
                // "&:hover": {
                //   borderColor: "#fff",
                // },
              }}
            >
              join
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ maxWidth: "1", bgcolor: "background.paper", m: "auto" }}>
        <Tabs
          value={undefined}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
          sx={{ overflow: "visible" }}
        >
          {categories.map((item, index) => (
            <Tab
              key={index}
              sx={{
                color: "#62646a",
                textTransform: "capitalize",
                fontSize: "16px",
                position: "relative",
                overflow: "visible",
                "&:hover::after": {
                  content: "''",
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: "0px",
                  left: 0,
                  backgroundColor: "primary.main",
                },
              }}
              label={item}
              disableRipple
            />
          ))}
        </Tabs>
      </Box>
      <Drawer
        drawerOpen={drawerOpen}
        handleOpenCloseDrawer={handleOpenCloseDrawer}
      />
    </Box>
  );
};

export default Navbar;
