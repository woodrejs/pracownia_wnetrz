import React from "react";
import TitleSection from "../../components/TitleSection";
import Social from "../../components/Social";
import GoTopArrow from "../../components/GoTopArrow";
import "./index.scss";

const Main = ({ data, size }) => {
  const imgs = {
    sm: data.hero.sm,
    md: data.hero.md,
    lg: data.hero.lg,
  };

  return (
    <div id="main" className="main">
      <div className="main__mask"></div>
      <div className="main__image">
        <img className="main__image__img" src={imgs[size]} alt="main_img" />
      </div>

      <div className="main__titleBox">
        <TitleSection data={data.main} />
      </div>

      <Social />
      <GoTopArrow />
    </div>
  );
};
export default Main;
