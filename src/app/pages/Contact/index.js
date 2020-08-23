import React from "react";
import "./index.scss";

import Social from "../../components/Social";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__mask"></div>
      <div className="contact__image"></div>
      <h2 className="contact__title">kontakt</h2>

      <div className="contact__data">
        <h3 className="contact__data__item contact__data__item--name">
          Pracownia Wnętrz Katarzyna Dziedzic
        </h3>
        <h3 className="contact__data__item contact__data__item--company">
          Projektowanie wnętrz Warszawa
        </h3>
        <h3 className="contact__data__item contact__data__item--mail">
          Email: kontakt@pracownia-wnetrz.pl
        </h3>
        <h3 className="contact__data__item contact__data__item--phone">
          Tel: +48 795 736 756
        </h3>
        <h2 className="contact__data__item contact__data__item--NIP">
          NIP 951 248 99 19
        </h2>
      </div>

      <Social />
    </div>
  );
};

export default Contact;
