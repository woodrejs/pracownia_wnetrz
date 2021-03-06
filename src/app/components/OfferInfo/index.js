import React from "react";
import "./index.scss";
import Button from "../Button";

const OfferInfo = ({ type, data }) => {
  const name = type;
  const price = data[type].price;
  const short = data[type].short;

  return (
    <div className="offerInfo">
      <h2 className="offerInfo__title">{name}</h2>
      <h5 className="offerInfo__price">{price} zł /m2</h5>
      <p className="offerInfo__price__info">
        Koszt projektu zależny jest od metrażu projektowanych pomieszczeń.
      </p>
      <p className="offerInfo__description">{short}</p>
      <div className="offerInfo__button">
        <Button
          size={{
            height: "3rem",
            width: "15rem",
            lineHeight: "3rem",
          }}
          title="oferta"
          path={`/${type}#${type}`}
        />
      </div>
    </div>
  );
};

export default OfferInfo;
