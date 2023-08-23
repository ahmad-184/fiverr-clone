import { lazy, useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Modal, Grow, Box } from "@mui/material";

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

import loadable from "../../helper/loadable";
import { Context } from "../../context/context";

const SigninLoginBox = loadable(
  lazy(() => import("../../components/signup_login_box"))
);

const Home = () => {
  const { loginBoxShowed, setLoginBoxShowed, setShowLoginBox, showLoginBox } =
    useContext(Context);

  useEffect(() => {
    let timeout;
    if (loginBoxShowed) {
      timeout = setTimeout(() => setLoginBoxShowed(false), 5000);
      return;
    }
    () => {
      clearTimeout(timeout);
    };
  }, [loginBoxShowed]);

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
      {loginBoxShowed ? null : (
        <Modal
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& .MuiBackdrop-root": {
              backgroundColor: "#0000003d",
            },
          }}
          open={showLoginBox === false ? true : false}
          onClose={() => setShowLoginBox(true)}
        >
          <Box sx={{ "&:focus-visible": { outline: "none !important" } }}>
            <SigninLoginBox />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default Home;
