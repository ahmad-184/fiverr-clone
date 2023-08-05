import { Box } from "@mui/material";

import Header from "./header";
import TrustedBy from "./trustedBy";
import PopularServices from "./popularServices";
import SellingProposition from "./selling-proposition";

const Home = () => {
  return (
    <Box>
      <Header />
      <TrustedBy />
      <PopularServices />
      <SellingProposition />
    </Box>
  );
};

export default Home;
