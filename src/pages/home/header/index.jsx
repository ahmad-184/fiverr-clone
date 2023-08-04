import { Box, useTheme } from "@mui/material";

import HeaderBg from "./HeaderBg";
import HeaderContent from "./HeaderContent";

import Container from "../../../containers/Container";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      backgroundColor="#0a4226"
      position="relative"
      sx={{
        minHeight: "300px",
        [theme.breakpoints.up("md")]: {
          height: "680px",
        },
      }}
    >
      <Container>
        <HeaderBg />
        <HeaderContent />
      </Container>
    </Box>
  );
};

export default Header;
