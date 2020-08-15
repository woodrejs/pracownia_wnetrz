import React from "react";
import "./index.scss";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import Social from "../../components/Social";

const About = () => {
  return (
    <div className="about">
      <div className="about__menuBox">
        <Logo />
        <Menu />
      </div>
      <div className="about__image"></div>
      <div className="about__bck"></div>
      <h2 className="about__title">o mnie</h2>
      <p className="about__description">
        Jestem dyplomowanym projektantem wnętrz z wieloletnim doświadczeniem w
        branży wnętrzarskiej. Wiedzę zdobywałam na studiach inżynierskich na
        kierunku architektury wnętrz, ukończyłam również dwuletnie studium
        dokształcające w zakresie kreatywnego aranżowania przestrzeni. Dodatkowo
        kształciłam się na studiach inżynierskich na wydziale meblarstwa i przez
        kilka lat zajmowałam się projektowaniem i renowacją mebli. Prowadzę
        Pracownię Wnętrz zajmującą się projektowaniem wnętrz mieszkalnych i
        publicznych na teranie całego kraju. Na swoim koncie mam już wiele
        kompleksowo zrealizowanych projektów. Pierwszym i zarazem najważniejszym
        etapem projektu jest zrozumienie potrzeb, prowadzę spotkana na terenie
        Warszawy i okolic, gdzie w miłej atmosferze rozmawiamy o Twoich gustach
        i stylu życia, bym mogła zaproponować aranżacje idealną właśnie dla
        Ciebie.
      </p>
      <div className="about__socialBox">
        <Social />
      </div>
      <p className="about__copywriterBox">© Pracownia Wnętrz 2020</p>
    </div>
  );
};

export default About;
