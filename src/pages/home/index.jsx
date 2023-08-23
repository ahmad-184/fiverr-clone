import { Helmet } from "react-helmet-async";

import Header from "./header";
import TrustedBy from "./trustedBy";
import PopularServices from "./popularServices";
import SellingProposition from "./selling-proposition";
import Categories from "./categories";
import FibBanner from "./fibBanner";
import Testimonials from "./testimonials";
import LogoMaker from "./logo-maker";
import MadeOnFiverr from "./made-on-fiverr";
import FiverrGuides from "./fiverr-guides";
import Signup from "./signup";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fiverr - Freelance Services Marketplace</title>
      </Helmet>
      <Header />
      <TrustedBy />
      <PopularServices />
      <SellingProposition />
      <Categories />
      <FibBanner />
      <Testimonials />
      <LogoMaker />
      <MadeOnFiverr />
      <FiverrGuides />
      <Signup />
    </>
  );
};

export default Home;
