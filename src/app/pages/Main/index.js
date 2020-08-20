import React from "react";

import TitleSection from "../../components/TitleSection";
import Social from "../../components/Social";
import GoTopArrow from "../../components/GoTopArrow";
import "./index.scss";
import setBackgroundImage from "../../utils/setBackgroundImage";

const Main = () => {
  const imgs = {
    small: require("../../../assets/images/main_736x414.jpg"),
    medium: require("../../../assets/images/main_1024x768.jpg"),
    large: require("../../../assets/images/main_1920x1080.jpg"),
  };

  return (
    <div id="main" className="main">
      <div className="main__mask"></div>
      <div
        className="main__image"
        style={{ backgroundImage: setBackgroundImage(imgs) }}
      ></div>

      <div className="main__titleBox">
        <TitleSection />
      </div>

      <Social />
      <GoTopArrow />
    </div>
  );
};
export default Main;
