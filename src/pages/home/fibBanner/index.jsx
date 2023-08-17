import { Box, Button, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Container from "../../../containers/Container";
import CheckIcon from "./CheckIcon";

const data = [
  {
    title: "Fiverr Pro",
    desc: "Access top freelancers and professional business tools for any project",
  },
  {
    title: "Fiverr Certified",
    desc: "Build your own branded marketplace of certified experts",
  },
  {
    title: "Fiverr Enterprise",
    desc: "Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution",
  },
];

const FibBanner = () => {
  const theme = useTheme();
  return (
    <section>
      <Container backgroundColor="#0d084d">
        <Box
          py={4}
          maxWidth="1350px"
          mx="auto"
          sx={{
            [theme.breakpoints.up("sm")]: {
              py: 6,
            },
            [theme.breakpoints.up("md")]: {
              py: 8,
            },
            [theme.breakpoints.up("lg")]: {
              py: 11,
            },
          }}
        >
          <Grid
            container
            gap={10}
            sx={{
              alignItems: "center",
              [theme.breakpoints.down("sm")]: {
                gap: 5,
              },
              [theme.breakpoints.up("md")]: {
                gap: 0,
              },
            }}
          >
            <Grid xs={12} sm={12} md={5.5}>
              <Box
                color="#fff"
                textAlign="center"
                sx={{
                  [theme.breakpoints.up("md")]: {
                    textAlign: "start",
                    pr: "10%",
                  },
                  [theme.breakpoints.up("lg")]: {
                    pr: "17%",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    userSelect: "none",
                    mb: 3,
                    "& span:nth-of-type(1)": {
                      color: "primary.main",
                    },
                    "& span:nth-of-type(2)": {
                      fontWeight: "300",
                      fontSize: "23px",
                    },
                  }}
                >
                  fiverr<span>.</span> <span>Business Solution</span>
                </Typography>
                <Typography variant="h4" fontSize="32px" fontWeight="bold">
                  Advanced solutions and professional talent for businesses
                </Typography>

                {data.map((item, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    gap={1.5}
                    sx={{
                      mt: index === 0 ? 3 : 1.5,
                      justifyContent: "center",
                      [theme.breakpoints.up("md")]: {
                        justifyContent: "start",
                        mt: index === 0 ? 3 : 2.5,
                      },
                    }}
                  >
                    <Box
                      display={{
                        xs: "none",
                        sm: "none",
                        md: "block",
                        lg: "block",
                        xl: "block",
                      }}
                    >
                      <CheckIcon />
                    </Box>
                    <Box>
                      <Typography variant="body1" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}

                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "16px",
                    fontWeight: "bold",
                    mt: 5,
                    backgroundColor: "#fff !important",
                    color: "grey.700",
                    px: 3,
                  }}
                >
                  Learn more
                </Button>
              </Box>
            </Grid>
            <Grid xs={0} sm={12} md={6.5}>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                sx={{
                  px: 1,
                  "& img": {
                    maxWidth: "100%",
                    objectFit: "contain",
                    maxHeight: "356px",
                    [theme.breakpoints.up("lg")]: {
                      maxHeight: "420px",
                    },
                  },
                }}
              >
                <picture>
                  <source
                    media="(min-width: 1160px)"
                    srcSet="https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_870,dpr_1.0/v1691443649/images/EN_see9ex.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_870,dpr_2.0/v1691443649/images/EN_see9ex.png 2x"
                  />
                  <source
                    media="(min-width: 900px)"
                    srcSet="https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_585,dpr_1.0/v1691443649/images/EN_see9ex.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_585,dpr_2.0/v1691443649/images/EN_see9ex.png 2x"
                  />
                  <source
                    media="(min-width: 600px)"
                    srcSet="https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_800,dpr_1.0/v1691443649/images/EN_see9ex.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_800,dpr_2.0/v1691443649/images/EN_see9ex.png 2x"
                  />
                  <img
                    alt="Fiverr Pro freelancers"
                    src="https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_870,dpr_1.0/v1691443649/images/EN_see9ex.png"
                    loading="lazy"
                  />
                </picture>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default FibBanner;
