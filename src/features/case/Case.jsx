import { motion } from "framer-motion";
import React, { Children } from "react";
import { useDispatch } from "react-redux";
import { SwiperSlide } from "swiper/react";
import { setActiveSlides } from "../modal/modalSlice";
import { MySwiper } from "../swiper/Swiper";

export const Case = (props) => {
  const dispatch = useDispatch();

  return (
    <MySwiper>
      {props.children}

      <button
        onClick={() => dispatch(setActiveSlides("closed"))}
        className="ExitButton"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.1 24.2"
          height="2.25vh"
        >
          <path
            d="M16.6 13.7v3c0 3.8-3.1 6.9-6.8 6.9h-.7c-3.8 0-6.8-3.1-6.8-6.9v-.4L.7 13.6c-.3-.4-.1-1 .3-1.3l1.3-.8c.4-.3.9-.1 1.2.1l-.4-.8c-.3-.5-.1-1 .3-1.3l1.3-.8c.4-.3.9-.1 1.2.2L3.5 5c-.6-1-.4-2.3.4-2.8s2-.1 2.6.9l4.6 7.6h.1V2.4c0-1 .7-1.8 1.7-1.8.9 0 1.7.8 1.7 1.8v8.3h-.7c1.7 0 2.7.7 2.7 3z"
            fill="var(--clr-accent)"
          />
          <path
            d="M9.4 17.6c0-1.5 1-2.8 2.7-2.8-3 0-4.1-1.1-3.8-3.3 0-.4.4-.8.8-.8h4.8c1.7 0 2.7.7 2.7 3v3c0 3.8-3.1 6.9-6.8 6.9h-.7c-3.8 0-6.8-3.1-6.8-6.9h0v-.4m12.3-5.6V2.4c0-1-.8-1.8-1.7-1.8h0c-1 0-1.7.8-1.7 1.8v8.3m-.1 0L6.5 3.1c-.6-1-1.8-1.4-2.6-.9h0c-.8.5-1 1.8-.4 2.8l4.9 7.9m-2 3.6-2.8-4.7c-.3-.4-.8-.6-1.3-.3l-1.3.8c-.4.3-.6.9-.3 1.3l2.8 4.7c.3.4.8.6 1.3.3l1.3-.8c.5-.3.6-.9.3-1.3zm1.9-3.6L6 9c-.3-.4-.8-.6-1.3-.3l-1.3.8c-.4.3-.6.8-.3 1.3l2.8 4.7c.3.4.8.6 1.3.3l1.3-.8c.3-.2.5-.6.4-1"
            fill="transparent"
            stroke="#000"
            strokeWidth=".5px"
            strokeLineCap="round"
            strokeLineJoin="round"
            strokeMiterLimit="10"
          />
        </svg>
      </button>
    </MySwiper>
  );
};
