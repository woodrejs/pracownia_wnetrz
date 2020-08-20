import React from "react";
import "./index.scss";

import Social from "../../components/Social";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__imagesBox">
        <div className="gallery__copywriterBox">© Pracownia Wnętrz 2020</div>
      </div>
      <div className="gallery__titleBox">jasna łazienka</div>

      <Social />
    </div>
  );
};

export default Gallery;
