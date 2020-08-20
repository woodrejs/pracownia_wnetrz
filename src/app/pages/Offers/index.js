import React from "react";
import OfferInfo from "../../components/OfferInfo";
import LazyLoad from "react-lazyload";
import "./index.scss";

const imgs = {
  small: require("../../../assets/images/mini_308x768.jpg"),
  medium: require("../../../assets/images/mini_576x1080.jpg"),
  large: require("../../../assets/images/mini_576x1080.jpg"),
};

const Offers = () => {
  return (
    <div id="offers" className="offers">
      <LazyLoad offset={-window.innerHeight / 3} once>
        <div className="offers__imageBox">
          <img
            className="offers__imageBox__image"
            src={imgs.large}
            alt="offers_img"
          />
        </div>
      </LazyLoad>

      <LazyLoad offset={-window.innerHeight / 3} once>
        <ul className="offers__handler">
          <li className="offers__handler__item">mini</li>
          <li className="offers__handler__item">midi</li>
          <li className="offers__handler__item">maxi</li>
        </ul>

        <div className="offers__content">
          <OfferInfo />
        </div>
      </LazyLoad>
    </div>
  );
};

export default Offers;
