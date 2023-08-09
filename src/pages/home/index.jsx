import { Box } from "@mui/material";

import Header from "./header";
import TrustedBy from "./trustedBy";
import PopularServices from "./popularServices";
import SellingProposition from "./selling-proposition";
import Categories from "./categories";
import FibBanner from "./fibBanner";
import Testimonials from "./testimonials";

const Home = () => {
  return (
    <Box>
      <Header />
      <TrustedBy />
      <PopularServices />
      <SellingProposition />
      <Categories />
      <FibBanner />
      <Testimonials />
    </Box>
  );
};

export default Home;
