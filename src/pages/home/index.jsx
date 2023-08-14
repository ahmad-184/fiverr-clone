import { Box } from "@mui/material";

import Header from "./header";
import TrustedBy from "./trustedBy";
import PopularServices from "./popularServices";
import SellingProposition from "./selling-proposition";
import Categories from "./categories";
import FibBanner from "./fibBanner";
import Testimonials from "./testimonials";
import LogoMaker from "./logo-maker";
import MadeOnFiverr from "./made-on-fiverr";

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
      <LogoMaker />
      <MadeOnFiverr />
    </Box>
  );
};

export default Home;
