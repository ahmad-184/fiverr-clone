import { Box, useMediaQuery, useTheme } from "@mui/material";
import { SwiperSlide } from "swiper/react";

import { Slider } from "../../../components";
import Container from "../../../containers/Container";
import Slides from "./Slides";
import { testimonialsData } from "../../../constants/home";

const Testimonials = () => {
  const theme = useTheme();
  const screen_up_md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container>
      <Box
        maxWidth={1350}
        mx="auto"
        sx={{
          my: 4,
          [theme.breakpoints.up("sm")]: {
            my: 10,
          },
          [theme.breakpoints.up("md")]: {
            my: 12,
          },
        }}
        position="relative"
      >
        <Slider buttonsPosition={screen_up_md ? "50%" : "27%"}>
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Slides item={item} />
            </SwiperSlide>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Testimonials;
