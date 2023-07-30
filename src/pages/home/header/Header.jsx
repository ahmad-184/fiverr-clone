import { Box, useTheme } from "@mui/material";

import HeaderBg from "./HeaderBg";
import HeaderContent from "./HeaderContent";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      backgroundColor="#0a4226"
      position="relative"
      sx={{
        minHeight: "300px",
        px: "1.8rem",
        [theme.breakpoints.up("md")]: {
          height: "680px",
        },
      }}
    >
      <HeaderBg />
      <HeaderContent />
    </Box>
  );
};

export default Header;
