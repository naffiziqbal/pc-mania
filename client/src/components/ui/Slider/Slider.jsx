import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import sliderImage from "./images/slider.png"

import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from "next/legacy/image";

const Slider = () => {

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
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
