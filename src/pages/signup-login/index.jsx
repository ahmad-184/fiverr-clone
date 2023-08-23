import { lazy } from "react";
import { Box, useTheme } from "@mui/material";
import { Helmet } from "react-helmet-async";

import Container from "../../containers/Container";
import loadable from "../../helper/loadable";

const SignupLoginBox = loadable(
  lazy(() => import("../../components/signup_login_box"))
);

const Signup_Login = () => {
  const theme = useTheme();
  return (
    <Container
      backgroundColor="grey.100"
      sx={{
        py: 6,
        [theme.breakpoints.down("md")]: {
          px: 0,
        },
        [theme.breakpoints.up("sm")]: {
          py: 7,
        },
        [theme.breakpoints.up("md")]: {
          py: 11,
        },
      }}
    >
      <Helmet>
        <title>Sign up fot a Fiverr account - join Fiverr today!</title>
      </Helmet>
      <Box
        maxWidth={1350}
        mx="auto"
        sx={{
          pt: 9,
          [theme.breakpoints.up("sm")]: {
            pt: 13,
          },
          [theme.breakpoints.up("md")]: {
            pt: 9.5,
          },
        }}
      >
        <SignupLoginBox />
      </Box>
    </Container>
  );
};

export default Signup_Login;
