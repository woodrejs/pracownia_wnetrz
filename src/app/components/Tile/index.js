import React, { useRef, useEffect } from "react";
import "./index.scss";
import { HashLink as Link } from "react-router-hash-link";

const Tile = ({ data, name, utils, size }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (data) {
      const photos = Object.keys(data);
      const imgSrc =
        size === "sm" ? data[photos[0]]["sm"] : data[photos[0]]["md"];
      const tmpImg = new Image();
      tmpImg.src = imgSrc;
      tmpImg.onload = function () {
        const img = imgRef.current;
        const height = tmpImg.height;
        const width = tmpImg.width;
        if (img) {
          if (width > height) {
            img.classList.add("verticalImg");
          } else {
            img.classList.add("horizontalImg");
          }
        }
      };
    }
  }, []);

  if (data) {
    const photos = Object.keys(data);
    const imgSrc =
      size === "sm" ? data[photos[0]]["sm"] : data[photos[0]]["md"];

    return (
      <Link to="/gallery" className="tile" onClick={() => utils(name)}>
        <div className="tile__mask"></div>
        <span className="tile__title">{name}</span>

        <img
          src={imgSrc}
          ref={imgRef}
          className="tile__img"
          alt="gallery_img"
        />
      </Link>
    );
  } else {
    return <></>;
  }
};
export default Tile;
