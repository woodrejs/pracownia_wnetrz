import React from "react";
import "./index.scss";
import { HashLink as Link } from "react-router-hash-link";

const Tile = ({ data, name, utils, size }) => {
  if (data) {
    const photos = Object.keys(data);
    const imgSrc =
      size === "sm" ? data[photos[0]]["sm"] : data[photos[0]]["md"];
    return (
      <Link to="/gallery" className="tile" onClick={() => utils(name)}>
        <div className="tile__mask"></div>
        <span className="tile__title">{name}</span>

        <img src={imgSrc} className="tile__img" alt="gallery_img" />
      </Link>
    );
  } else {
    return <></>;
  }
};
export default Tile;
