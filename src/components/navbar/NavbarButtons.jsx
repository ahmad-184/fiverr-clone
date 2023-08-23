import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { navbarLinks } from "../../constants/navbar";

import NavbarButtonMenu from "./NavbarButtonMenu";

const button_style = {
  color: "#fff",
  border: "1px solid #fff",
  "&:hover": {
    borderColor: "#fff",
  },
};

const NavbarButtons = ({ activeOnScroll, isHomePage }) => {
  const navigate = useNavigate();
  return (
    <Box
      justifyContent="space-between"
      gap={3}
      alignItems="center"
      minWidth="fit-content"
      display={{
        xs: "none",
        sm: "flex",
        md: "flex",
        lg: "flex",
        xl: "flex",
      }}
    >
      <NavbarButtonMenu activeOnScroll={!isHomePage ? true : activeOnScroll} />
      {navbarLinks.map((item, index) => (
        <Typography
          variant="body1"
          fontWeight="bold"
          key={index}
          color={
            !isHomePage ? "grey.600" : activeOnScroll ? "grey.600" : "#fff"
          }
          sx={{
            cursor: "pointer",
            display: {
              xs: "none",
              sm: index === 3 ? "block" : "none",
              md: !isHomePage
                ? index === 1 || index === 0
                  ? "none"
                  : "block"
                : index === 1
                ? "none"
                : "block",
              lg: "block",
              xl: "block",
            },
            ...(activeOnScroll
              ? {
                  "&:hover": {
                    color: "primary.main",
                  },
                }
              : null),
          }}
        >
          {item}
        </Typography>
      ))}
      <Button
        onClick={() => navigate("/join")}
        variant="outlined"
        sx={{
          textTransform: "capitalize",
          fontWeight: "800",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "white",
          },
          ...(!isHomePage ? null : activeOnScroll ? null : button_style),
        }}
      >
        join
      </Button>
    </Box>
  );
};

export default NavbarButtons;
