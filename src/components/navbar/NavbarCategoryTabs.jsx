import { useState } from "react";
import { Box, Tab, Tabs, Grow } from "@mui/material";
import { categories } from "../../constants/navbar";

import Container from "../../containers/Container";

const NavbarCategoryTabs = ({ activeOnScroll }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Container
      backgroundColor="background.paper"
      borderBottom="2px solid #e4e5e7"
      sx={{
        display: activeOnScroll
          ? {
              xs: "none",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }
          : "none",
        justifyContent: "center",
      }}
    >
      <Grow in={activeOnScroll} {...(activeOnScroll ? { timeout: 200 } : {})}>
        <Box
          sx={{
            dipslay: "flex",
            width: "100%",
            justifyContent: "center",
            visibility: activeOnScroll ? "visible" : "none",
            transition: "visibility 1.2s ease",
          }}
        >
          <Tabs
            value={activeTab}
            onChange={(e, index) => setActiveTab(index)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            TabScrollButtonProps={{
              disableRipple: true,
            }}
            aria-label="scrollable auto tabs example"
            sx={{
              position: "relative",
              maxWidth: "1350px",
              justifyContent: "center",
              mx: "auto",
              "& .Mui-selected": { color: "#62646a !important" },
              "& .MuiTabs-indicator": { display: "none" },
              "& .MuiTabScrollButton-root": {
                position: "absolute !important",
                top: "50%",
                transform: "translateY(-50%)",
                height: "100%",
                zIndex: "2",
                width: "50px",
              },
              "&.MuiTabs-root div:nth-of-type(1)": {
                left: "0",
                justifyContent: "start",
                background:
                  "linear-gradient(90deg,#fff 30%,hsla(0,0%,100%,0)) !important",
              },
              "&.MuiTabs-root div:nth-of-type(4)": {
                right: "0",
                justifyContent: "end",
                background:
                  "linear-gradient(270deg,#fff 30%,hsla(0,0%,100%,0)) !important",
              },
            }}
          >
            {categories.map((item, index) => (
              <Tab
                key={index}
                sx={{
                  ...(index === 0 && { paddingLeft: "0px" }),
                  ...(index === categories.length - 1 && {
                    padding: "12px 12px",
                    paddingRight: "0px",
                  }),
                  color: "#62646a",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  position: "relative",
                  overflow: "visible",
                  "&:hover::after": {
                    content: "''",
                    position: "absolute",
                    width: "100%",
                    height: "3px",
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
      </Grow>
    </Container>
  );
};

export default NavbarCategoryTabs;
