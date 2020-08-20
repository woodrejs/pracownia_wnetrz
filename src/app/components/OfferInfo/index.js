import React from "react";
import "./index.scss";
import Button from "../Button";

const OfferInfo = () => {
  return (
    <div className="offerInfo">
      <h2 className="offerInfo__title">PROJEKT MINI</h2>
      <h5 className="offerInfo__price">50 -70 zł /m2</h5>
      <p className="offerInfo__price__info">
        Koszt projektu zależny jest od metrażu projektowanych pomieszczeń.
      </p>
      <p className="offerInfo__description">
        Dla osób planujących metamorfozę mieszkania i tych którzy mają własną
        wizję projektu i chcieliby zobaczyć jak będzie się on prezentował.
      </p>
      <div className="offerInfo__button">
        <Button
          size={{
            height: "3rem",
            width: "15rem",
            lineHeight: "3rem",
          }}
          title="oferta"
          path="/offer"
        />
      </div>
    </div>
  );
};

export default OfferInfo;
