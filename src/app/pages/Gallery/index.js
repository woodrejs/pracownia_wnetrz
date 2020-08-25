import React from "react";
import "./index.scss";
import LazyLoad from "react-lazyload";
import Social from "../../components/Social";
import { HashLink as Link } from "react-router-hash-link";

const Gallery = ({ data, name, size }) => {
  const createPhotos = () => {
    const arr = [];

    if (name) {
      const photos = data[name].photos;

      for (const photo in photos) {
        const scr = photos[photo][size];
        arr.push(
          <LazyLoad>
            <img src={scr} className="gallery__imagesBox__img" />
          </LazyLoad>
        );
      }
    }

    return arr;
  };

  return (
    <div className="gallery">
      <div className="gallery__imagesBox">{createPhotos()}</div>
      <div className="gallery__titleBox">{name}</div>

      <Link className="gallery__btn" to="/#portfolio">
        wróć
      </Link>
      <Social />
    </div>
  );
};

export default Gallery;
