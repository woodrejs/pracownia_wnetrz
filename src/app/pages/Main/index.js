import React from "react";
import TitleSection from "../../components/TitleSection";
import Social from "../../components/Social";
import GoTopArrow from "../../components/GoTopArrow";
import Button from "../../components/Button";
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
        <img
          className="main__titleBox__img"
          src={require("../../../assets/icons/logo_full.png")}
          alt="main_logo"
        />

        <Button
          size={{
            height: "3rem",
            width: "15rem",
            lineHeight: "3rem",
          }}
          title="oferta"
          type={1}
          path="/#offers"
        />
      </div>

      <Social />
      <GoTopArrow />
    </div>
  );
};
export default Main;
