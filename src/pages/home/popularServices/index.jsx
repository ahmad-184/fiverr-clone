import { Box, Typography, useTheme } from "@mui/material";

import Container from "../../../containers/Container";

import Slides from "./Slides";

const PopularServices = () => {
  const theme = useTheme();

  return (
    <section>
      <Container
        sx={{
          [theme.breakpoints.down("sm")]: {
            mb: 4,
          },
          [theme.breakpoints.up("sm")]: {
            mb: 11,
          },
        }}
      >
        <Box maxWidth="1350px" mx="auto">
          <Box mb={4}>
            <Typography variant="h4" fontWeight="bold" color="#404145">
              Popular Services
            </Typography>
          </Box>
          <Slides />
        </Box>
      </Container>
    </section>
  );
};

export default PopularServices;
