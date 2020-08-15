import React from "react";
import "./index.scss";
import Button from "../Button";
import { secoundary } from "../../global/COLORS";

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
          size={{ height: "2.1rem", width: "10rem" }}
          color={{ backgroundColor: secoundary }}
          title="oferta"
        />
      </div>
    </div>
  );
};

export default TitleSection;
