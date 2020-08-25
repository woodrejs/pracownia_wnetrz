import React from "react";
import OfferInfo from "../../components/OfferInfo";
import LazyLoad from "react-lazyload";
import "./index.scss";

//images
const imgs = {
  mini: {
    sm: require("../../../assets/images/mini_308x768.jpg"),
    md: require("../../../assets/images/mini_576x1080.jpg"),
    lg: require("../../../assets/images/mini_576x1080.jpg"),
  },
  midi: {
    sm: require("../../../assets/images/midi_308x768.jpg"),
    md: require("../../../assets/images/midi_308x768.jpg"),
    lg: require("../../../assets/images/midi_576x1080.jpg"),
  },
  maxi: {
    sm: require("../../../assets/images/maxi_308x768.jpg"),
    md: require("../../../assets/images/maxi_308x768.jpg"),
    lg: require("../../../assets/images/maxi_576x1080.jpg"),
  },
};

const Offers = ({ data, utils, size }) => {
  console.log("render");
  return (
    <div id="offers" className="offers">
      <LazyLoad
        offset={-window.innerHeight / 3}
        height={window.innerHeight / 2}
        once
      >
        <div className="offers__imageBox">
          <img
            className="offers__imageBox__image"
            src={imgs[utils.type][size]}
            alt="offers_img"
          />
        </div>
      </LazyLoad>

      <LazyLoad
        offset={-window.innerHeight / 3}
        height={window.innerHeight / 2}
        once
      >
        <ul className="offers__handler">
          <li
            className={`offers__handler__item ${
              utils.type === "mini" ? "offers__handler__item--active" : ""
            }`}
            onClick={() => utils.click("mini")}
          >
            <span>mini</span>
          </li>
          <li
            className={`offers__handler__item ${
              utils.type === "midi" ? "offers__handler__item--active" : ""
            }`}
            onClick={() => utils.click("midi")}
          >
            <span>midi</span>
          </li>
          <li
            className={`offers__handler__item ${
              utils.type === "maxi" ? "offers__handler__item--active" : ""
            }`}
            onClick={() => utils.click("maxi")}
          >
            <span>maxi</span>
          </li>
        </ul>

        <div className="offers__content">
          <OfferInfo type={utils.type} data={data} />
        </div>
      </LazyLoad>
    </div>
  );
};

export default Offers;
