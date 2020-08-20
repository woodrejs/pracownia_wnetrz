import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./index.scss";

const MenuItem = ({ name, to, children }) => {
  return (
    <li className="menuItem">
      <Link smooth to={to} className="menuItem__link">
        {name}
      </Link>
      <div className="menuItem__line" />
      <ul className="menuItem__list">{children}</ul>
    </li>
  );
};
export default MenuItem;
