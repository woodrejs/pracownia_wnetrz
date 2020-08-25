import React from "react";
import "./index.scss";
import Social from "../../components/Social";
import { HashLink as Link } from "react-router-hash-link";

//images
const imgs = {
  mini: {
    sm: require("../../../assets/images/mini_308x768.jpg"),
    md: require("../../../assets/images/mini_576x1080.jpg"),
    lg: require("../../../assets/images/mini_576x1080.jpg"),
  },
  midi: {
    sm: require("../../../assets/images/midi_308x768.jpg"),
    md: require("../../../assets/images/midi_308x768.jpg"),
    lg: require("../../../assets/images/midi_576x1080.jpg"),
  },
  maxi: {
    sm: require("../../../assets/images/maxi_308x768.jpg"),
    md: require("../../../assets/images/maxi_308x768.jpg"),
    lg: require("../../../assets/images/maxi_576x1080.jpg"),
  },
};

const Offer = ({ data, type, size }) => {
  const name = type;
  const price = data.price;
  const long = data.long;
  const dscpt = data.dscpt;

  return (
    <>
      <div id={type} className="offer">
        <div className="offer__imageBox">
          <img
            className="offer__imageBox__img"
            src={imgs[type][size]}
            alt="offer_img"
          />
        </div>

        <div className="offer__contentBox">
          <h2 className="offer__contentBox__item offer__contentBox__item--title">
            {name}
          </h2>
          <h3 className="offer__contentBox__item offer__contentBox__item--price">
            {price} zł /m2
          </h3>
          <p className="offer__contentBox__item offer__contentBox__item--info">
            Koszt projektu zależny jest od metrażu projektowanych pomieszczeń
          </p>
          <h4 className="offer__contentBox__item offer__contentBox__item--subTitle">
            Zakres projektu:
          </h4>
          <p className="offer__contentBox__item offer__contentBox__item--description">
            {dscpt}
          </p>
        </div>

        <Link className="offer__backBox" to="/#offers">
          wróć
        </Link>
      </div>

      <div className="offer__moreContent">
        <h3 className="offer__moreContent__item offer__moreContent__item--title">
          Nadzór autorski:
        </h3>
        <p className="offer__moreContent__item offer__moreContent__item--description">
          {long}
        </p>
      </div>

      <Social />
    </>
  );
};

export default Offer;
