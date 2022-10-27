import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSlides } from "../modal/modalSlice";

// <button onClick={() => dispatch(setActiveSlides("Contact"))}>
// Contact
// </button>

export function Navigation() {
  const dispatch = useDispatch();
  return (
    <>
      <nav>
        <button onClick={() => dispatch(setActiveSlides("About"))}>
          About me
        </button>
      </nav>
    </>
  );
}
