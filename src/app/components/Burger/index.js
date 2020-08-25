import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { HashLink as Link } from "react-router-hash-link";
import "./index.scss";

const Burger = () => {
  return (
    <Menu right width="60%">
      <Link className="bm-item" to="/">
        strona główna
      </Link>
      <Link className="bm-item" to="/#portfolio">
        portfolio
      </Link>
      <Link className="bm-item" to="/#offers">
        oferta
      </Link>
      <Link className="bm-item" to="/mini">
        oferta
      </Link>
      <Link className="bm-item" to="/midi">
        oferta
      </Link>
      <Link className="bm-item" to="/maxi">
        oferta
      </Link>
      <Link className="bm-item" to="/about">
        About
      </Link>
      <Link className="bm-item" to="/contact">
        Contact
      </Link>
    </Menu>
  );
};

export default Burger;
