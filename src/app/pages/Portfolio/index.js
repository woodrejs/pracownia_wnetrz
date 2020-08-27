import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import Tile from "../../components/Tile";
import { v4 as uuid } from "uuid";
import "./index.scss";

const Portfolio = ({ data, utils, size }) => {
  const [counter, setCounter] = useState(0);
  const portfolioLength = Object.keys(data).length;

  const createTiles = () => {
    const arr = [];
    for (const name in data) {
      arr.push(
        <Tile
          key={uuid()}
          name={name}
          data={data[name].photos}
          utils={utils}
          size={size}
        />
      );
    }
    return arr;
  };
  console.log(Math.ceil(portfolioLength / 3));
  console.log(counter);

  const handleNextBtn = () => {
    if ((size !== "lg") & (window.innerWidth < window.innerHeight)) {
      if (counter <= portfolioLength - 2) setCounter(counter + 1);
    } else {
      //if (counter < portfolioLength % 3) setCounter(counter + 1);
      if (counter < Math.floor(portfolioLength / 3)) setCounter(counter + 1);
    }
  };
  const handlePrevBtn = () => {
    if (counter !== 0) setCounter(counter - 1);
  };

  return (
    <div id="portfolio" className="portfolio">
      <LazyLoad
        offset={-window.innerHeight / 5}
        height={window.innerHeight / 4}
        once
      >
        <div className="portfolio__galleryBox">
          <div
            style={{ transform: `translateY( -${counter * 50}vh)` }}
            className="portfolio__galleryBox__slider"
          >
            {createTiles()}
          </div>
        </div>
      </LazyLoad>

      <ul className="portfolio__handlerBox">
        <li className="portfolio__handlerBox__item" onClick={handlePrevBtn}>
          prev
        </li>
        <li className="portfolio__handlerBox__item" onClick={handleNextBtn}>
          next
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
