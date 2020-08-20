import React from "react";
import LazyLoad from "react-lazyload";
import Tile from "../../components/Tile";
import "./index.scss";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <LazyLoad offset={-window.innerHeight / 3} once>
        <div className="portfolio__galleryBox">
          <div className="portfolio__galleryBox__slider">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </div>
        </div>
      </LazyLoad>

      <ul className="portfolio__handlerBox">
        <li className="portfolio__handlerBox__item">prev</li>
        <li className="portfolio__handlerBox__item">next</li>
      </ul>

      <p className="portfolio__copywriterBox">© Pracownia Wnętrz 2020</p>
    </div>
  );
};

export default Portfolio;
