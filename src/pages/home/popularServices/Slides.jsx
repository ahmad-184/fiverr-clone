import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { Box, Typography, useMediaQuery } from "@mui/material";

import { Slider } from "../../../components";

import { popularServicesData } from "../../../constants/home";

import "swiper/css";

const Slides = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  const screen_down_600 = useMediaQuery("(max-width: 600px)");
  const screen_down_800 = useMediaQuery("(max-width: 800px)");
  const screen_down_1050 = useMediaQuery("(max-width: 1050px)");
  const screen_down_1250 = useMediaQuery("(max-width: 1250px)");
  const screen_up_1250 = useMediaQuery("(min-width: 1250px)");

  useEffect(() => {
    if (screen_down_600) setSlidesPerView(1);
    else if (screen_down_800) setSlidesPerView(2);
    else if (screen_down_1050) setSlidesPerView(3);
    else if (screen_down_1250) setSlidesPerView(4);
    else if (screen_up_1250) setSlidesPerView(5);
    else setSlidesPerView(1);
  }, [screen_down_600, screen_down_800, screen_down_1050, screen_down_1250]);

  return (
    <>
      <Box
        sx={{
          "& .swiper-slide": {
            // width: "100% !important",
            // margin: 0,
          },
          "& .swiper": {
            borderRadius: "4px",
          },
          position: "relative",
        }}
      >
        <Slider slidesPerView={slidesPerView}>
          {popularServicesData.map((item, index) => (
            <SwiperSlide key={index} draggable={true}>
              <Link to="/" style={{ textDecoration: " none" }}>
                <Box
                  p={2}
                  backgroundColor="#efeff0"
                  position="relative"
                  height="315px"
                  overflow="hidden"
                  sx={{
                    transition: ".3s opacity ease",
                    borderRadius: 1,
                    "&:hover": {
                      opacity: ".8",
                    },
                  }}
                >
                  <Box position="relative" zIndex="1">
                    <Typography
                      variant="h1"
                      fontWeight="medium"
                      fontSize="14px"
                      color="white"
                    >
                      {item.desc}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontSize="24px"
                      fontWeight="bold"
                      color="white"
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Box
                    position="absolute"
                    inset="0"
                    width="100%"
                    height="100%"
                    top="0"
                    left="0"
                  >
                    <picture>
                      <source
                        media="(min-width: 1060px)"
                        srcSet={item.images.up_1060}
                      />
                      <source
                        media="(min-width: 800px)"
                        srcSet={item.images.up_800}
                      />
                      <source
                        media="(min-width: 600px)"
                        srcSet={item.images.up_600}
                      />
                      <source
                        media="(min-width: 599px)"
                        srcSet={item.images.up_599}
                      />
                      <img
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                        src={item.images.image}
                        alt={item.title}
                        loading="lazy"
                      />
                    </picture>
                  </Box>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Slides;
