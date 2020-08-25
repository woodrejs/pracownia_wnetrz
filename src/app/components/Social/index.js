import React from "react";
import "./index.scss";

const Social = () => {
  return (
    <a href="https://pl-pl.facebook.com/">
      <img
        className="facebook"
        src={require("../../../assets/icons/facebook.svg")}
        alt="facebook_icon"
      />
    </a>
  );
};
export default Social;
