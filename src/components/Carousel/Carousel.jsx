// src/components/Carousel/Carousel.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../Card/Card";
import leftArrow from "../../assets/left.svg";
import rightArrow from "../../assets/right.svg";
import styles from "./Carousel.module.css";

function Carousel({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.carouselWrapper}>
      {/* Custom Navigation Buttons */}
      <img src={leftArrow} alt="Prev" className={`swiper-button-prev ${styles.navBtn}`} ref={prevRef} />
      <img src={rightArrow} alt="Next" className={`swiper-button-next ${styles.navBtn}`} ref={nextRef} />

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
      >
        {data.map((album) => (
          <SwiperSlide key={album.id}>
            <Card album={album} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
