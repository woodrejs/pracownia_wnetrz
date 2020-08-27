import React from "react";
import "./index.scss";
import Social from "../../components/Social";
import { HashLink as Link } from "react-router-hash-link";
import { v4 as uuid } from "uuid";

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

const Offer = ({ data, type, size, name }) => {
  const price = data.price;
  const long = data.long;
  const dscpt = data.dscpt;

  const createText = (text) => {
    return text
      .split("\n")
      .map((item, i) => <p key={uuid()}>{item.replace(/\\n/g, "")}</p>);
  };

  return (
    <div className="offer">
      <div id={type} className="offer__Top">
        <div className="offer__Top__contentBox">
          <h2 className="offer__Top__contentBox__item offer__Top__contentBox__item--title">
            {name}
          </h2>
          <h3 className="offer__Top__contentBox__item offer__Top__contentBox__item--price">
            {price} zł /m2
          </h3>
          <p className="offer__Top__contentBox__item offer__Top__contentBox__item--info">
            Koszt projektu zależny jest od metrażu projektowanych pomieszczeń
          </p>
          <h4 className="offer__Top__contentBox__item offer__Top__contentBox__item--subTitle">
            Zakres projektu:
          </h4>
          <p className="offer__Top__contentBox__item offer__Top__contentBox__item--description">
            {createText(dscpt)}
          </p>
        </div>

        <div className="offer__Top__backBox">
          <Link className="offer__Top__backBox__btn" to="/#offers">
            wróć
          </Link>
        </div>

        <div className="offer__Top__imageBox">
          <img
            className="offer__Top__imageBox__img"
            src={imgs[type][size]}
            alt="offer_img"
          />
        </div>
      </div>
      {long && (
        <div className="offer__Bot">
          <p className="offer__Bot__content">{createText(long)}</p>
        </div>
      )}

      <Social />
    </div>
  );
};

export default Offer;
