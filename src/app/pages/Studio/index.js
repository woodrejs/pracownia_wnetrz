import React from "react";
import "./index.scss";
import LazyLoad from "react-lazyload";

const imgs = {
  small: require("../../../assets/images/studio_410x615.jpg"),
  medium: require("../../../assets/images/studio_410x615.jpg"),
  large: require("../../../assets/images/studio_768x864.jpg"),
};

const Studio = () => {
  return (
    <div className="studio">
      <LazyLoad offset={-window.innerHeight / 3} once>
        <div className="studio__imageBox ">
          <img
            className="studio__imageBox__image"
            src={imgs.large}
            alt="studio_img"
          />
        </div>
      </LazyLoad>
      <LazyLoad offset={-window.innerHeight / 3} once>
        <div className="studio__description">
          <p className="studio__description__item studio__description__item--top">
            Łączenie styli, tworzenie wyjątkowych aranżacji, a przede wszystkim
            podążanie za pragnieniami i potrzebami klienta to moja wizja pracy
            nad projektem.
          </p>
          <p className="studio__description__item studio__description__item--bot">
            Nasze studio zajmuje się projektowaniem przestrzeni mieszkalnych i
            publicznych na terenie całego kraju <br />
            Nasza oferta obejmuje również realizacje projektów „pod klucz”,
            zapewniamy profesjonalne wykończenie i doświadczoną ekipę remontową.
            Współpracujemy także z wieloma sklepami wnętrzarskimi – zapewniając
            tym samym kompleksową i sprawną realizację projektów.
          </p>
        </div>

        <h2 className="studio__title">studio</h2>
      </LazyLoad>
    </div>
  );
};

export default Studio;
