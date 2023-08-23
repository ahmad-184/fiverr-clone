import { Box, Divider } from "@mui/material";

import Container from "../../containers/Container";
import MobileSize from "./MobileSize";
import DesktopSize from "./DesktopSize";
import Bottom from "./Bottom";

const Footer = () => {
  return (
    <footer>
      <Box pb={2}>
        <Divider
          sx={{
            backgroundColor: "#e4e5e7",
            borderColor: "#e4e5e7",
          }}
        />
        <Container mt={1}>
          <Box maxWidth={1350} mx="auto">
            <Box
              display={{
                xs: "block",
                sm: "none",
              }}
            >
              <MobileSize />
            </Box>
            <Box
              display={{
                xs: "none",
                sm: "block",
              }}
            >
              <DesktopSize />
            </Box>
            <Divider
              sx={{
                backgroundColor: "#e4e5e7",
                borderColor: "#e4e5e7",
              }}
            />
            <Bottom />
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
