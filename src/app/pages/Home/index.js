import React from "react";
import Main from "../Main";
import Studio from "../Studio";
import Offers from "../Offers";
import Portfolio from "../Portfolio";
import "./index.scss";

const Home = () => {
  return (
    <div className="home">
      <Main />
      <Studio />
      <Offers />
      <Portfolio />
    </div>
  );
};
export default Home;
