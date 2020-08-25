import React from "react";
import "./index.scss";
import { HashLink as Link } from "react-router-hash-link";

const SubMenuItem = ({ name, to, click }) => {
  return (
    <li className="subMenuItem" onClick={() => click(name)}>
      <Link smooth to={to} className="subMenuItem__link">
        Projekt {name}
      </Link>
      <div className="subMenuItem__line" />
    </li>
  );
};

export default SubMenuItem;
