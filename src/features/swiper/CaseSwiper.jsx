import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import styles from "./Swiper.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import { useSelector, useDispatch } from "react-redux";
import { setActiveSlides } from "../modal/modalSlice";

export function CaseSwiper() {
  const dispatch = useDispatch();

  return (
    <>
      <h1 class="testande">Victor Vennerström</h1>
      <div class="test-wrap2">
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          modules={[Pagination, Navigation]}
          className={styles.MainSwiper}
        >
          <SwiperSlide id="case-bg-one">
            <div class="swiper-title">
              <button
                class="title-btn"
                onClick={() => dispatch(setActiveSlides("Case1"))}
              >
                See More
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide id="case-bg-three">
            <div class="swiper-title">
              <button
                class="title-btn"
                onClick={() => dispatch(setActiveSlides("Case2"))}
              >
                See More
              </button>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="temp-nav button-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24.1 16.5"
            height="2.25vh"
          >
            <path
              d="M8.6 9.4c-.5.1-1-.3-1.1-.8l-.3-1.5c-.1-.4.2-.8.5-1H2.4c-1 0-1.8-.8-1.8-1.7 0-1 .8-1.7 1.8-1.7h8.3v.6c0-1.7.8-2.7 3-2.7h3c3.8 0 6.9 3 6.9 6.8v.7c0 3.6-2.8 6.5-6.3 6.8-.1.1-.2.1-.4.2l-5.4.9c-.5.1-1-.3-1.1-.8l-.3-1.5c-.1-.5.3-.9.7-1.1l-1 .2c-.5.1-1-.3-1.1-.8l-.3-1.5c-.1-.5.3-1 .8-1.1h-.6z"
              fill="var(--clr-accent)"
            />
            <path
              d="M17.6 7.8c-1.5 0-2.8-.9-2.8-2.7 0 3-1.1 4-3.3 3.8-.5 0-.8-.4-.8-.8V3.3c0-1.7.8-2.7 3-2.7h3c3.8 0 6.9 3 6.9 6.8v.7c0 3.6-2.8 6.5-6.3 6.8M10.7 2.7H2.4c-1 0-1.8.7-1.8 1.7h0c0 .9.8 1.7 1.8 1.7h8.3m.2 6.5c-.5.1-.9.6-.8 1.1l.3 1.5c.1.5.6.9 1.1.8l5.4-.9c.2-.1.3-.1.4-.2.3-.2.5-.5.4-.9l-.3-1.5c-.1-.5-.6-.9-1.1-.8l-5.4.9zm1.4-3.7-3.1.5c-.5.1-.9.6-.8 1.1l.3 1.5c.1.5.6.9 1.1.8l5.4-.9c.5-.1.9-.6.8-1.1l-.3-1.5c-.1-.5-.6-.9-1.1-.8l-1.6.3M7.7 6.1c-.4.2-.6.6-.5 1l.3 1.5c.1.5.6.9 1.1.8l3.3-.5"
              fill="transparent"
              stroke="#000"
              strokeWidth=".5px"
              strokeLineCap="round"
              strokeLineJoin="round"
              strokeMiterLimit="10"
            />
          </svg>
        </div>
        <div className="temp-nav button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24.1 16.5"
            height="2.25vh"
          >
            <path
              d="M15 9.4c.5.1.9.6.8 1.1l-.3 1.5c-.1.5-.6.9-1.1.8l-1-.2c.5.1.8.6.7 1.1l-.3 1.5c-.1.5-.6.9-1.1.8l-5.4-.9c-.2-.1-.3-.1-.4-.2C3.4 14.6.6 11.7.6 8.1v-.7C.6 3.6 3.7.6 7.5.6h3c2.2 0 3 1 3 2.7v-.6h8.3c1 0 1.8.7 1.8 1.7 0 .9-.8 1.7-1.8 1.7h-5.3c.4.2.6.6.5 1l-.3 1.5c-.1.5-.6.9-1.1.8H15z"
              fill="var(--clr-accent)"
            />
            <path
              d="M6.9 14.9C3.4 14.6.6 11.7.6 8.1v-.7C.6 3.6 3.7.6 7.5.6h3c2.2 0 3 1 3 2.7v4.8c0 .4-.3.8-.8.8-2.2.2-3.3-.8-3.3-3.8 0 1.8-1.3 2.7-2.8 2.7m6.9-1.7h8.3c1 0 1.8-.8 1.8-1.7h0c0-1-.8-1.7-1.8-1.7h-8.3m-5.6 9c-.5-.1-1 .3-1.1.8L6.5 14c-.1.4.1.7.4.9.1.1.2.1.4.2l5.4.9c.5.1 1-.3 1.1-.8l.3-1.5c.1-.5-.3-1-.8-1.1l-5.4-.9zm3.3-2.9-1.6-.3c-.5-.1-1 .3-1.1.8l-.3 1.5c-.1.5.3 1 .8 1.1l5.4.9c.5.1 1-.3 1.1-.8l.3-1.5c.1-.5-.3-1-.8-1.1l-3.2-.5m.5 0 3.3.5c.5.1 1-.3 1.1-.8l.3-1.5c.1-.4-.2-.8-.5-1"
              fill="transparent"
              stroke="#000"
              strokeWidth=".5px"
              strokeLineCap="round"
              strokeLineJoin="round"
              strokeMiterLimit="10"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
