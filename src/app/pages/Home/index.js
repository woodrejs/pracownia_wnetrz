import React from "react";
import Main from "../Main";
import Studio from "../Studio";
import Offers from "../Offers";
import Portfolio from "../Portfolio";
import "./index.scss";

const Home = ({ data, offerUtils, galleryUtils, size }) => {
  return (
    <div className="home">
      <Main
        data={{
          main: data.main,
          hero: data.hero,
        }}
        size={size}
      />
      <Studio data={data.studio} size={size} />
      <Offers
        utils={offerUtils}
        data={{
          mini: data.mini,
          midi: data.midi,
          maxi: data.maxi,
        }}
        size={size}
      />
      <Portfolio data={data.gallery} utils={galleryUtils} size={size} />
    </div>
  );
};
export default Home;
