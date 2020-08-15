import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__item">strona główna</li>
        <li className="menu__item">portfolio</li>
        <li className="menu__item">oferta</li>
        <li className="menu__item">o mnie</li>
        <li className="menu__item">kontakt</li>
      </ul>
    </div>
  );
};
export default Menu;
