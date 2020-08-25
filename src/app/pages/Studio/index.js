import React from "react";
import "./index.scss";
import LazyLoad from "react-lazyload";

//images
const imgs = {
  sm: require("../../../assets/images/studio_410x615.jpg"),
  md: require("../../../assets/images/studio_410x615.jpg"),
  lg: require("../../../assets/images/studio_768x864.jpg"),
};

const Studio = ({ data, size }) => {
  return (
    <div className="studio">
      <LazyLoad
        offset={-window.innerHeight / 3}
        height={window.innerHeight / 2}
        once
      >
        <div className="studio__imageBox ">
          <img
            className="studio__imageBox__image"
            src={imgs[size]}
            alt="studio_img"
          />
        </div>
      </LazyLoad>
      <LazyLoad offset={-window.innerHeight / 3} once>
        <div className="studio__description">{data.dscpt}</div>
        <h2 className="studio__title">studio</h2>
      </LazyLoad>
    </div>
  );
};

export default Studio;
