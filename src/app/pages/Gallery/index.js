import React from "react";
import "./index.scss";
import Menu from "../../components/Menu";
import Logo from "../../components/Logo";
import Social from "../../components/Social";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__menuBox">
        <Logo />
        <Menu />
      </div>
      <div className="gallery__imagesBox">
        <div className="gallery__copywriterBox">© Pracownia Wnętrz 2020</div>
      </div>
      <div className="gallery__titleBox">jasna łazienka</div>

      <div className="gallery__socialBox">
        <Social />
      </div>
    </div>
  );
};

export default Gallery;
