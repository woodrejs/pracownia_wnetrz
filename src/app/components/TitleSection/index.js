import React from "react";
import "./index.scss";
import Button from "../Button";

const TitleSection = () => {
  return (
    <div className="titleSection">
      <h1 className="titleSection__title">PRACOWNIA WNĘTRZ</h1>
      <h3 className="titleSection__subTittle">
        Łączenie styli, tworzenie wyjątkowych aranżacji, a przede wszystkim
        podążanie za pragnieniami i potrzebami klienta.
      </h3>
      <div className="titleSection__button">
        <Button
          size={{
            height: "3rem",
            width: "15rem",
            lineHeight: "3rem",
          }}
          title="oferta"
          type={1}
          path="/#offers"
        />
      </div>
    </div>
  );
};

export default TitleSection;
