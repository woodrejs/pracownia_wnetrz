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
  return <div className="arrow" style={handleMenuPosition()}></div>;
};
export default GoTopArrow;
