import React from "react";
import "./index.scss";
import Social from "../../components/Social";

const Contact = ({ data, size }) => {
  const { name, company, mail, phone, nip } = data;
  return (
    <div className="contact">
      <div className="contact__image">
        <img
          className="contact__image__img"
          src={require("../../../assets/images/contact_bck.jpg")}
          alt="bck_img"
        />
      </div>
      <h2 className="contact__title">kontakt</h2>

      <div className="contact__data">
        <h3 className="contact__data__item contact__data__item--name">
          {name}
        </h3>
        <h3 className="contact__data__item contact__data__item--company">
          {company}
        </h3>
        <h3 className="contact__data__item contact__data__item--mail">
          Email: {mail}
        </h3>
        <h3 className="contact__data__item contact__data__item--phone">
          Tel: {phone}
        </h3>
        <h2 className="contact__data__item contact__data__item--NIP">
          NIP {nip}
        </h2>
      </div>

      <Social />
    </div>
  );
};

export default Contact;
