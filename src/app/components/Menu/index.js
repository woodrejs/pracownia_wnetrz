import React from "react";
import MenuItem from "../MenuItem";
import SubMenuItem from "../SubMenuItem";
import "./index.scss";

const Menu = () => {
  return (
    <>
      <ul className="menu">
        <MenuItem name="strona główna" to="/#main"></MenuItem>
        <MenuItem name="portfolio" to="/#portfolio"></MenuItem>

        <MenuItem name="oferta" to="/#offers">
          <SubMenuItem name="projekt mini" to="/offer" />
          <SubMenuItem name="projekt midi" to="/offer" />
          <SubMenuItem name="projekt maxi" to="/offer" />
        </MenuItem>

        <MenuItem name="o mnie" to="/about"></MenuItem>
        <MenuItem name="kontakt" to="/contact"></MenuItem>
      </ul>
    </>
  );
};
export default Menu;
