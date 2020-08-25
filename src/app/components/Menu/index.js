import React from "react";
import MenuItem from "../MenuItem";
import SubMenuItem from "../SubMenuItem";
import "./index.scss";

const Menu = ({ click }) => {
  return (
    <>
      <ul className="menu">
        <MenuItem name="strona główna" to="/#main"></MenuItem>
        <MenuItem name="portfolio" to="/#portfolio"></MenuItem>

        <MenuItem name="oferta" to="/#offers">
          <SubMenuItem name="mini" to="/mini#mini" click={click} />
          <SubMenuItem name="midi" to="/midi#midi" click={click} />
          <SubMenuItem name="maxi" to="/maxi#maxi" click={click} />
        </MenuItem>

        <MenuItem name="o mnie" to="/about"></MenuItem>
        <MenuItem name="kontakt" to="/contact"></MenuItem>
      </ul>
    </>
  );
};
export default Menu;
