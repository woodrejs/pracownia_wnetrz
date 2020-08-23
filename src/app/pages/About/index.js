import React from "react";
import "./index.scss";

import Social from "../../components/Social";

const About = () => {
  return (
    <div className="about">
      <div className="about__image"></div>
      <div className="about__bck"></div>
      <h2 className="about__title">o mnie</h2>
      <div className="about__description">
        <p className="about__description__p about__description__p--top">
          Jestem dyplomowanym projektantem wnętrz z wieloletnim doświadczeniem w
          branży wnętrzarskiej. Wiedzę zdobywałam na studiach inżynierskich na
          kierunku architektury wnętrz, ukończyłam również dwuletnie studium
          dokształcające w zakresie kreatywnego aranżowania przestrzeni.
          Dodatkowo kształciłam się na studiach inżynierskich na wydziale
          meblarstwa i przez kilka lat zajmowałam się projektowaniem i renowacją
          mebli.
        </p>
        <p className="about__description__p about__description__p--bot">
          Prowadzę Pracownię Wnętrz zajmującą się projektowaniem wnętrz
          mieszkalnych i publicznych na teranie całego kraju. Na swoim koncie
          mam już wiele kompleksowo zrealizowanych projektów. Pierwszym i
          zarazem najważniejszym etapem projektu jest zrozumienie potrzeb,
          prowadzę spotkana na terenie Warszawy i okolic, gdzie w miłej
          atmosferze rozmawiamy o Twoich gustach i stylu życia, bym mogła
          zaproponować aranżacje idealną właśnie dla Ciebie.
        </p>
      </div>

      <Social />
    </div>
  );
};

export default About;
