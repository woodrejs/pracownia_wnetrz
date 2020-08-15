import React from "react";
import "./index.scss";
import Menu from "../../components/Menu";
import Social from "../../components/Social";
import Logo from "../../components/Logo";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__mask"></div>
      <div className="contact__image"></div>
      <h2 className="contact__title">kontakt</h2>

      <div className="contact__data">
        <h3 className="contact__data__name">
          Pracownia Wnętrz Katarzyna Dziedzic
        </h3>
        <h3 className="contact__data__company">
          Projektowanie wnętrz Warszawa
        </h3>
        <h3 className="contact__data__mail">
          Email: kontakt@pracownia-wnetrz.pl
        </h3>
        <h3 className="contact__data__phone">Tel: +48 795 736 756</h3>
        <h2 className="contact__data__NIP">NIP 951 248 99 19</h2>
      </div>

      <div className="contact__menuBox">
        <Logo />
        <Menu />
      </div>
      <div className="contact__socialBox">
        <Social />
      </div>
      <div className="contact__copywriterBox">© Pracownia Wnętrz 2020</div>
    </div>
  );
};

export default Contact;
