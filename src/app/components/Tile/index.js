import React from "react";
import "./index.scss";
import { HashLink as Link } from "react-router-hash-link";
import LazyLoad from "react-lazyload";

const Tile = ({ data, name, utils, size }) => {
  const photos = Object.keys(data);

  return (
    <Link to="/gallery" className="tile" onClick={() => utils(name)}>
      <div className="tile__mask"></div>
      <span className="tile__title">{name}</span>

      <img
        src={data[photos[0]][size]}
        className="tile__img"
        alt="gallery_img"
      />
    </Link>
  );
};
export default Tile;
