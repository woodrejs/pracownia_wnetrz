import React, { useState } from "react";
import Menu from "../../components/Menu";
import Logo from "../../components/Logo";
import TitleSection from "../../components/TitleSection";
import Social from "../../components/Social";
import "./Main.scss";

const Main = () => {
  const [scrollOfsset, setScrollOffset] = useState(0);

  window.addEventListener("scroll", () => {
    setScrollOffset(window.pageYOffset);
  });
  const handleMenuPosition = () => {
    if (scrollOfsset > window.innerHeight) return { position: "fixed" };
  };

  return (
    <div className="main">
      <div className="main__mask"></div>
      <div className="main__image"></div>
      <div className="main__menuBox" style={handleMenuPosition()}>
        <Logo />
        <Menu />
      </div>
      <div className="main__titleBox">
        <TitleSection />
      </div>
      <div className="main__socialBox">
        <Social />
      </div>
    </div>
  );
};
export default Main;
