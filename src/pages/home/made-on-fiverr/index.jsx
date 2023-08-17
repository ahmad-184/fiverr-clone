import { useState, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { SwiperSlide } from "swiper/react";

import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import Container from "../../../containers/Container";
import { Slider } from "../../../components";
import Slides from "./Slides";

import { madeOnFiverrData } from "../../../constants/home";

const MadeOnFiverr = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const theme = useTheme();

  const screen_down_600 = useMediaQuery("(max-width: 600px)");
  const screen_down_799 = useMediaQuery("(max-width: 799px)");
  const screen_down_1060 = useMediaQuery("(max-width: 1060px)");
  const screen_up_1060 = useMediaQuery("(min-width: 1061px)");

  useEffect(() => {
    if (screen_down_600) return setSlidesPerView(1);
    else if (screen_down_799) return setSlidesPerView(2);
    else if (screen_down_1060) return setSlidesPerView(3);
    else if (screen_up_1060) return setSlidesPerView(4);
  }, [screen_down_600, screen_down_799, screen_down_1060, screen_up_1060]);

  return (
    <section>
      <Container
        backgroundColor="#f5f5f5"
        py={5}
        sx={{
          [theme.breakpoints.up("md")]: {
            pt: 8,
            pb: 6.5,
          },
          [theme.breakpoints.up("lg")]: {
            pt: 12,
            pb: 10,
          },
        }}
      >
        <Box maxWidth="1350px" mx="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography
              variant="h4"
              fontSize="27px"
              color="grey.800"
              fontWeight="bold"
              sx={{
                [theme.breakpoints.up("sm")]: {
                  fontSize: "32px",
                },
              }}
            >
              Inspiring Work made on Fiverr
            </Typography>
            <Typography
              variant="body1"
              fontWeight="medium"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                color: "#446ee7",
                alignItems: "center",
                gap: 0,
                cursor: "pointer",
              }}
            >
              See more
              <KeyboardArrowRightRoundedIcon
                sx={{ position: "relative", top: "1px", fontSize: "20px" }}
              />
            </Typography>
          </Box>
          <Box
            position="relative"
            sx={{
              "& .swiper": {
                height: "345px",
              },
            }}
          >
            <Slider
              slidesPerView={slidesPerView}
              spaceBetweenSlide={35}
              buttonsPosition="46%"
            >
              {madeOnFiverrData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Slides item={item} />
                </SwiperSlide>
              ))}
            </Slider>
          </Box>
          <Box
            mt={1.5}
            display={{
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            }}
          >
            <Typography
              variant="body1"
              fontWeight="medium"
              sx={{
                color: "#446ee7",
                display: "flex",
                alignItems: "center",
                gap: 0,
                cursor: "pointer",
              }}
            >
              See more
              <KeyboardArrowRightRoundedIcon
                sx={{ position: "relative", top: "1px", fontSize: "20px" }}
              />
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default MadeOnFiverr;
