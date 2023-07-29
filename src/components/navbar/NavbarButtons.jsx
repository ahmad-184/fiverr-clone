import { Box, Button, Typography } from "@mui/material";
import { navbarLinks } from "../../constants/navbar";

const NavbarButtons = ({ activeOnScroll }) => {
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
      {navbarLinks.map((item, index) => (
        <Typography
          variant="body1"
          fontWeight="bold"
          key={index}
          color={
            activeOnScroll && index === 0
              ? "#1e1692"
              : activeOnScroll
              ? "#62646a"
              : "#fff"
          }
          sx={{
            cursor: "pointer",
            display: {
              xs: "none",
              sm: index === 4 ? "block" : "none",
              md: index === 2 ? "none" : "block",
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
        variant="outlined"
        sx={{
          textTransform: "capitalize",
          fontWeight: "800",
          ...(activeOnScroll
            ? null
            : {
                color: "#fff",
                border: "1px solid #fff",
                "&:hover": {
                  borderColor: "#fff",
                },
              }),
        }}
      >
        join
      </Button>
    </Box>
  );
};

export default NavbarButtons;