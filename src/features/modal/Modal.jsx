import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSlides } from "./modalSlice";

export const Modal = (props) => {
  const slideTitle = useSelector((state) => state.modal.activeSlideTitle);

  return (
    <AnimatePresence>
      {slideTitle !== "closed" && (
        <motion.div
          initial={{ top: "150%" }}
          animate={{ top: 0, transition: { duration: 0.5 } }}
          exit={{ top: "150%", transition: { duration: 0.5 } }}
          className="MotionDiv"
        >
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
