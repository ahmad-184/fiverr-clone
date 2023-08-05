import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import Container from "../../../containers/Container";

const data = [
  {
    title: "Stick to your budget",
    desc: "Find the right service for every price point. No hourly rates, just project-based pricing.",
  },
  {
    title: "Get quality work done quickly",
    desc: "Hand your project over to a talented freelancer in minutes, get long-lasting results.",
  },
  {
    title: "Pay when you're happy",
    desc: "Upfront quotes mean no surprises. Payments only get released when you approve.",
  },
  {
    title: "Count on 24/7 support",
    desc: "Our round-the-clock support team is available to help anytime, anywhere.",
  },
];

const imageSourceData = [
  {
    width: "1160px",
    url: "https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_700,dpr_1.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_700,dpr_2.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png 2x",
  },
  {
    width: "900px",
    url: "https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_600,dpr_1.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_600,dpr_2.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png 2x",
  },
  {
    width: "600px",
    url: "https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_900,dpr_1.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_900,dpr_2.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png 2x",
  },
  {
    width: "361px",
    url: "https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_600,dpr_1.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_600,dpr_2.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png 2x",
  },
  {
    width: "360px",
    url: "https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_360,dpr_1.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png 1x, https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_360,dpr_2.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png 2x",
  },
];

const SellingProposition = () => {
  const theme = useTheme();

  return (
    <Container
      my={12}
      py={5}
      backgroundColor="#f1fdf7"
      display="flex"
      justifyContent="center"
      sx={{
        [theme.breakpoints.up("md")]: {
          py: 7,
        },
        [theme.breakpoints.up("lg")]: {
          py: 11,
        },
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: "1350px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            [theme.breakpoints.down("md")]: {
              mb: 6,
            },
            [theme.breakpoints.up("md")]: {
              pr: "11%",
            },
            [theme.breakpoints.up("lg")]: {
              pr: "14%",
            },
          }}
        >
          <Typography
            variant="h5"
            fontSize="28px"
            fontWeight="bold"
            color="grey.800"
            lineHeight="130%"
            mb={2.5}
            sx={{
              [theme.breakpoints.up("sm")]: {
                fontSize: "32px",
              },
              [theme.breakpoints.up("md")]: {
                mb: 3,
              },
            }}
          >
            The best part? Everything.
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            gap={2.3}
            sx={{
              [theme.breakpoints.up("md")]: {
                gap: 3,
              },
            }}
          >
            {data.map((item, index) => (
              <Box key={index}>
                <Box display="flex" gap={1}>
                  <CheckCircleOutlineRoundedIcon
                    sx={{ color: "grey.600", fontSize: "29px" }}
                  />
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="grey.800"
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        fontSize: "18px",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  fontSize="18px"
                  color="grey.700"
                  fontWeight="medium"
                >
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            width="100%"
            position="relative"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
              "& img": {
                width: "100%",
                objectFit: "cover",
                height: "100%",
              },
            }}
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              p={1.3}
              lineHeight={0}
              backgroundColor="#212121ba"
              borderRadius="50%"
              sx={{
                transform: "translate(-50%,-50%)",
              }}
            >
              <PlayArrowRoundedIcon sx={{ color: "#fff", fontSize: "60px" }} />
            </Box>
            <picture>
              {imageSourceData.map((item, index) => (
                <source
                  media={`(min-width:${item.width})`}
                  srcSet={item.url}
                  key={index}
                />
              ))}

              <img
                alt="Video teaser image"
                src="https://res.cloudinary.com/dnlnbcbt0/image/upload/q_auto,f_auto,w_700,dpr_1.0/v1691273366/images/selling-proposition-still-1400-x1_eql3ei.png"
                loading="auto"
              />
            </picture>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SellingProposition;
