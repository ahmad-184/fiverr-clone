import { useRef } from "react";
import { Swiper } from "swiper/react";

import SliderArrowButton from "./SliderArrowButton";

const Slider = ({ slidesPerView, children }) => {
  const swiperRef = useRef(null);

  return (
    <div>
      <SliderArrowButton dir="left" swiper={swiperRef} />
      <SliderArrowButton dir="right" swiper={swiperRef} />
      <Swiper
        spaceBetween={30}
        slidesPerView={slidesPerView}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
