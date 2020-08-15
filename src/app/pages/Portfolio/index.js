import React from "react";
import "./index.scss";
import Tile from "../../components/Tile";

const Portfolio = () => {
  return (
    <div className="portfolio">
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
      <p className="portfolio__copywriterBox">© Pracownia Wnętrz 2020</p>
      <ul className="portfolio__handlerBox">
        <li className="portfolio__handlerBox__item">prev</li>
        <li className="portfolio__handlerBox__item">next</li>
      </ul>
    </div>
  );
};

export default Portfolio;
