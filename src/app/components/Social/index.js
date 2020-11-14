import React from "react";
import "./index.scss";

const Social = () => {
  return (
    <a href="https://www.facebook.com/studiokaha">
      <img
        className="facebook"
        src={require("../../../assets/icons/facebook.svg")}
        alt="facebook_icon"
      />
    </a>
  );
};
export default Social;
