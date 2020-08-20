import React from "react";
import Menu from "../Menu";
import Logo from "../Logo";
import Burger from "../Burger";
import "./index.scss";

const Nav = () => {
  /*
  const [scrollOfsset, setScrollOffset] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollOffset(window.pageYOffset);
  });
  const handleMenuPosition = () => {
    if (scrollOfsset > window.innerHeight - 20)
      return { position: "fixed", backgroundColor: "white" };
  };
*/

  return (
    <nav className="nav">
      <div className="nav__logoBox">
        <Logo />
      </div>
      <div className="nav__menuBox">
        <Menu />
      </div>
      <div className="nav__burgerBox">
        <Burger />
      </div>
    </nav>
  );
};
export default Nav;
