import { Box, Typography, Button, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Container from "../../../containers/Container";

const data = [
  {
    width: "1160px",
    srcset:
      "https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_1160,dpr_1.0/v1691789171/images/logo-maker-banner-wide-desktop-1352-2x_sfvcfr.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_1160,dpr_2.0/v1691789171/images/logo-maker-banner-wide-desktop-1352-2x_sfvcfr.png 2x",
  },
  {
    width: "900px",
    srcset:
      "https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_1112,dpr_1.0/v1691789171/images/logo-maker-banner-wide-desktop-1352-2x_sfvcfr.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_1112,dpr_2.0/v1691789171/images/logo-maker-banner-wide-desktop-1352-2x_sfvcfr.png 2x",
  },
  {
    width: "600px",
    srcset:
      "https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_852,dpr_1.0/v1691789171/images/logo-maker-banner-tablet-852-2x_sjcsdl.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_852,dpr_2.0/v1691789171/images/logo-maker-banner-tablet-852-2x_sjcsdl.png 2x",
  },
  {
    width: "600px",
    srcset:
      "https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_600,dpr_1.0/v1691789171/images/logo-maker-banner-tablet-852-2x_sjcsdl.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_600,dpr_2.0/v1691789171/images/logo-maker-banner-tablet-852-2x_sjcsdl.png 2x",
  },
  {
    width: "360px",
    srcset:
      "https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_550,dpr_1.0/v1691789126/images/logo-maker-banner-mobile-552-2x_reuibq.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_550,dpr_2.0/v1691789126/images/logo-maker-banner-mobile-552-2x_reuibq.png 2x",
  },
  {
    width: "0px",
    srcset:
      "https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_320,dpr_1.0/v1691789126/images/logo-maker-banner-mobile-552-2x_reuibq.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_320,dpr_2.0/v1691789126/images/logo-maker-banner-mobile-552-2x_reuibq.png 2x",
  },
];

const LogoMaker = () => {
  const theme = useTheme();

  return (
    <Container
      my={1}
      mb={3}
      sx={{
        px: "0",
        [theme.breakpoints.up("sm")]: {
          px: "1.8rem",
          mb: 10,
        },
      }}
    >
      <Box
        maxWidth="1350px"
        pt={5}
        mx="auto"
        backgroundColor="#446ee7"
        position="relative"
        borderRadius={1.5}
        sx={{
          overflow: "hidden",
          [theme.breakpoints.up("md")]: {
            pt: 0,
          },
        }}
      >
        <Grid container>
          <Grid
            xs={12}
            sm={12}
            md={7}
            lg={6}
            px="1.8rem"
            zIndex="2"
            sx={{
              [theme.breakpoints.up("md")]: {
                py: 4,
              },
              [theme.breakpoints.up("lg")]: {
                px: "4.5rem",
              },
            }}
          >
            <Typography
              variant="h4"
              color="white"
              fontWeight="bold"
              fontSize="24px"
              mb={2.5}
              sx={{
                userSelect: "none",
              }}
            >
              fiverr <span style={{ fontWeight: "normal" }}>logo maker</span>
            </Typography>
            <Typography variant="h4" color="white" fontWeight="bold">
              Make an incredible logo
            </Typography>
            <Typography
              variant="h4"
              color="white"
              fontWeight="medium"
              fontFamily="Domaine-Display"
              mb={1}
            >
              in minutes
            </Typography>
            <Typography
              variant="body1"
              color="white"
              fontWeight="normal"
              mb={3}
            >
              Pre-designed by top talent. Just add your touch.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff !important",
                color: "#446ee7",
                textTransform: "capitalize",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "none !important",
                px: 3,
              }}
            >
              try fiverr log maker
            </Button>
          </Grid>
          <Grid xs={12} sm={12} md={5} lg={6}>
            <Box
              sx={{
                "& img": {
                  width: "100%",
                  height: "100%",
                  zIndex: "1",
                  mt: "-175px",
                  [theme.breakpoints.up("sm")]: {
                    mt: "-25%",
                  },
                  [theme.breakpoints.up("md")]: {
                    mt: "0px",
                    display: "block",
                    objectFit: "cover",
                  },
                },
                "& picture": {
                  display: "flex",
                  justifyContent: "flex-end",
                  [theme.breakpoints.up("md")]: {
                    position: "absolute",
                    top: 0,
                    left: "-10%",
                    right: "-10%",
                    bottom: 0,
                    alignItems: "center",
                  },
                  [theme.breakpoints.up("lg")]: {
                    left: 0,
                    right: 0,
                  },
                },
              }}
            >
              <picture>
                {data.map((item, index) => (
                  <source
                    media={`(min-width: ${item.width})`}
                    srcSet={item.srcset}
                    key={index}
                  />
                ))}
                <img alt="fiverr logo maker" loading="lazy" />
              </picture>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LogoMaker;
