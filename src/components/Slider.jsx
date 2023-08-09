import { useRef } from "react";
import { Swiper } from "swiper/react";

import SliderArrowButton from "./SliderArrowButton";

const Slider = ({
  slidesPerView,
  spaceBetweenSlide,
  children,
  buttonsPosition,
}) => {
  const swiperRef = useRef(null);

  return (
    <div>
      <SliderArrowButton
        buttonsPosition={buttonsPosition}
        dir="left"
        swiper={swiperRef}
      />
      <SliderArrowButton
        buttonsPosition={buttonsPosition}
        dir="right"
        swiper={swiperRef}
      />
      <Swiper
        spaceBetween={spaceBetweenSlide || 30}
        slidesPerView={slidesPerView || 1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
