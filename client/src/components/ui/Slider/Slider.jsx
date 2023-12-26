import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import sliderImage from "./images/slider.png"

import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const Slider = () => {

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <Image src={sliderImage} alt="img" layout='responsive' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={sliderImage} alt="img" layout='responsive' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={sliderImage} alt="img" layout='responsive' />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider
