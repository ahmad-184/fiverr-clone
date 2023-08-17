import { Box, Button, Typography, useTheme } from "@mui/material";

import Container from "../../../containers/Container";

const Signup = () => {
  const theme = useTheme();

  return (
    <Container position="relative">
      <Box
        position="relative"
        maxWidth={1350}
        backgroundColor="#45091b"
        overflow="hidden"
        py={5}
        px="1.8rem"
        borderRadius={1}
        mx="auto"
        mb={8}
        sx={{
          [theme.breakpoints.up("sm")]: {
            py: 8,
          },
          [theme.breakpoints.up("md")]: {
            py: 10,
            mt: 12,
            mb: 14,
          },
          [theme.breakpoints.up("lg")]: {
            py: 16,
            px: 12,
          },
        }}
      >
        <Box zIndex="2" position="relative">
          <Typography
            variant="h4"
            mb={5}
            color="#fff"
            fontWeight="bold"
            sx={{
              [theme.breakpoints.up("sm")]: {
                fontSize: "40px",
                lineHeight: "48px",
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "48px",
                mb: 6,
              },
            }}
          >
            Suddenly it's all so{" "}
            <span
              style={{
                fontFamily: "Domaine-Display",
                fontWeight: "500",
                letterSpacing: ".3px",
              }}
            >
              doable.
            </span>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "#fff",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "none !important",
              px: 3,
            }}
          >
            Join Fiverr
          </Button>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
            "& picture": {
              display: "block",
            },
            "& img": {
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
            },
          }}
        >
          <picture>
            <source
              media="(min-width: 1160px)"
              srcSet="https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_1400,dpr_1.0/v1692084650/images/bg-signup-1400-x1_lsqe4x.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_1400,dpr_2.0/v1692084650/images/bg-signup-1400-x1_lsqe4x.png 2x"
            />
            <source
              media="(min-width: 900px)"
              srcSet="https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_1160,dpr_1.0/v1692092873/images/bg-signup-1160-x1_hnors0.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_1160,dpr_2.0/v1692092873/images/bg-signup-1160-x1_hnors0.png 2x"
            />
            <img
              src="https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_1400,dpr_1.0/v1692084650/images/bg-signup-1400-x1_lsqe4x.png"
              alt="The talent you need"
              loading="lazy"
            />
          </picture>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
