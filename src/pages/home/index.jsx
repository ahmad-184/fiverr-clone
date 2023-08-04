import { Box } from "@mui/material";

import Header from "./header";
import TrustedBy from "./trustedBy";
import PopularServices from "./popularServices";

const Home = () => {
  return (
    <Box>
      <Header />
      <TrustedBy />
      <PopularServices />
    </Box>
  );
};

export default Home;
