import React from "react";
import "./index.scss";
import OfferInfo from "../../components/OfferInfo";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers__image"></div>
      <ul className="offers__handler">
        <li className="offers__handler__item">mini</li>
        <li className="offers__handler__item">midi</li>
        <li className="offers__handler__item">maxi</li>
      </ul>
      <div className="offers__content">
        <OfferInfo />
      </div>
    </div>
  );
};

export default Offers;
