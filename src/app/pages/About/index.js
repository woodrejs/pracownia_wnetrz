import React from "react";
import "./index.scss";
import Social from "../../components/Social";

//images
const imgs = {
  main: {
    sm: require("../../../assets/images/about_img.jpg"),
    md: require("../../../assets/images/about_img.jpg"),
    lg: require("../../../assets/images/about_img.jpg"),
  },
  bck: {
    sm: require("../../../assets/images/about_bck_205x384.jpg"),
    md: require("../../../assets/images/about_bck_384x540.jpg"),
    lg: require("../../../assets/images/about_bck_384x540.jpg"),
  },
};

const About = ({ data, size }) => {
  return (
    <div className="about">
      <div className="about__image">
        <img
          className="about__bck__img"
          src={imgs.main[size]}
          alt="about__image__img"
        />
      </div>
      <div className="about__bck">
        <img
          className="about__bck__img"
          src={imgs.bck[size]}
          alt="about_bck_img"
        />
      </div>
      <h2 className="about__title">o mnie</h2>
      <div className="about__description">
        <p className="about__description__p about__description__p--top">
          {data.dscpt}
        </p>
      </div>

      <Social />
    </div>
  );
};

export default About;
