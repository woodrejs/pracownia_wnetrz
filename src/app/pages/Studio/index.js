import React from "react";
import "./index.scss";

const Studio = () => {
  return (
    <div className="studio">
      <div className="studio__image"></div>
      <p className="studio__description">
        Łączenie styli, tworzenie wyjątkowych aranżacji, a przede wszystkim
        podążanie za pragnieniami i potrzebami klienta to moja wizja pracy nad
        projektem.
        <br />
        Nasze studio zajmuje się projektowaniem przestrzeni mieszkalnych i
        publicznych na terenie całego kraju <br />
        Nasza oferta obejmuje również realizacje projektów „pod klucz”,
        zapewniamy profesjonalne wykończenie i doświadczoną ekipę remontową.
        Współpracujemy także z wieloma sklepami wnętrzarskimi – zapewniając tym
        samym kompleksową i sprawną realizację projektów.
      </p>
      <h2 className="studio__title">studio</h2>
    </div>
  );
};

export default Studio;
