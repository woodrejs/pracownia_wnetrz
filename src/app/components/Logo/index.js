import React from "react";
import "./index.scss";
import { HashLink as Link } from "react-router-hash-link";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="logo"
        src={require("../../../assets/icons/logo_short.png")}
        alt="logo_icon"
      />
    </Link>
  );
};
export default Logo;
