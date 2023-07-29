import { Box, useTheme } from "@mui/material";

import HeaderBg from "./HeaderBg";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      backgroundColor="#0a4226"
      position="relative"
      sx={{
        minHeight: "200px",
        [theme.breakpoints.up("md")]: {
          height: "680px",
        },
      }}
    >
      <HeaderBg />
    </Box>
  );
};

export default Header;
