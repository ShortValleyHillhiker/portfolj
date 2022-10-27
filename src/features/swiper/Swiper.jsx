import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// swiper bundle styles

// import required modules
import { Mousewheel, Pagination } from "swiper";
import styles from "./Swiper.module.css";

export function MySwiper(props) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={-1}
        autoHeight={"true"}
        direction={"vertical"}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={styles.CaseSwiper}
      >
        {props.children}
      </Swiper>
    </>
  );
}
