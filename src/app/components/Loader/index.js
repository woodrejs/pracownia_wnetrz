import React from "react";
import "./index.scss";

const Loader = () => {
  return (
    <div className="Loader">
      <div className="Loader__logoBox">
        <img
          src={require("../../../assets/icons/log_full.png")}
          className="Loader__logoBox__img"
          alt="logo_img"
        />
      </div>
      <div className="Loader__spinerBox">
        <div className="loader">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
