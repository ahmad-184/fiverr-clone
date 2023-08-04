import { Box, Typography } from "@mui/material";

import Container from "../../../containers/Container";

import Slides from "./Slides";

const PopularServices = () => {
  return (
    <Container mb={10}>
      <Box maxWidth="1350px" mx="auto">
        <Box mb={4}>
          <Typography variant="h4" fontWeight="bold" color="#404145">
            Popular Services
          </Typography>
        </Box>
        <Slides />
      </Box>
    </Container>
  );
};

export default PopularServices;