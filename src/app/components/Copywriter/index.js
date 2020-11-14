import React from "react";
import "./index.scss";

const Copywriter = ({ data }) => {
  return (
    <div className="footer">
      <div className="footer__container">
        <a
          className="footer__container--facebook"
          href="https://www.facebook.com/studiokaha"
        >
          <img
            src={require("../../../assets/icons/facebook.svg")}
            alt="facebook_icon"
          />
        </a>
        <p className="footer__container--name">{data.name}</p>
        <p className="footer__container--phone">Tel: {data.phone}</p>
        <p className="footer__container--mail">Mail: {data.mail}</p>
        <p className="footer__copywriter">© Kaha Studio Wnętrz 2020</p>
      </div>
    </div>
  );
};

export default Copywriter;
