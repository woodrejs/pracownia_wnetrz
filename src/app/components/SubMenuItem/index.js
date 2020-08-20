import React from "react";
import "./index.scss";
import { HashLink as Link } from "react-router-hash-link";

const SubMenuItem = ({ name, to }) => {
  return (
    <li className="subMenuItem">
      <Link smooth to={to} className="subMenuItem__link">
        {name}
      </Link>
      <div className="subMenuItem__line" />
    </li>
  );
};

export default SubMenuItem;
