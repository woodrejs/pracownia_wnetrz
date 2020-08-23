import React, { useState } from "react";
import "./index.scss";

const GoTopArrow = () => {
  const [scrollOfsset, setScrollOffset] = useState(0);

  window.addEventListener("scroll", () => {
    setScrollOffset(window.pageYOffset);
  });
  const handleMenuPosition = () => {
    if (scrollOfsset > window.innerHeight - 20)
      return { position: "fixed", display: "block" };
  };
  const handleClick = () => window.scrollTo(0, 0);
  return (
    <div
      className="arrow"
      onClick={handleClick}
      style={handleMenuPosition()}
    ></div>
  );
};
export default GoTopArrow;
