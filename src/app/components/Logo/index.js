import React from "react";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img
        className="logo__img"
        src={require("../../../assets/icons/logo-11.png")}
        alt="logo_icon"
      />
    </div>
  );
};

export default Logo;
