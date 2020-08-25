import React, { useState, useEffect } from "react";
import CMSPanelOffer from "../../components/CMSPanelOffer";
import CMSPanelGallery from "../../components/CMSPanelGallery";
import CMSPanelMain from "../../components/CMSPanelMain";
import CMSPanelStudio from "../../components/CMSPanelStudio";
import CMSPanelAbout from "../../components/CMSPanelAbout";
import CMSPanelContact from "../../components/CMSPanelContact";
import CMSPanelHero from "../../components/CMSPanelHero";
import CMSPanelAddGallery from "../../components/CMSPanelAddGallery";
import CMSPanelLogin from "../../components/CMSPanelLogin";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import "./index.scss";

const CMS = ({ data }) => {
  const auth = firebase.auth();
  const [isLogIn, setIsLogIn] = useState(false);

  const displayGalleries = () => {
    const galleryArray = [];
    for (const gallery in data.gallery) {
      galleryArray.push(
        <CMSPanelGallery key={uuid()} name={gallery} data={data.gallery} />
      );
    }
    return galleryArray;
  };

  const handleBtn = () => auth.signOut();

  useEffect(
    () =>
      auth.onAuthStateChanged((user) =>
        user ? setIsLogIn(true) : setIsLogIn(false)
      ),
    []
  );

  if (isLogIn) {
    return (
      <div className="CMS">
        <div className="CMS__content">
          <button className="CMS__btn" onClick={handleBtn}>
            Wyloguj
          </button>
          <CMSPanelHero data={data.hero} />
          <CMSPanelMain data={data.main} />
          <CMSPanelStudio data={data.studio} />
          <CMSPanelAbout data={data.about} />
          <CMSPanelContact data={data.contact} />
          <CMSPanelOffer name="mini" data={data.mini} />
          <CMSPanelOffer name="midi" data={data.midi} />
          <CMSPanelOffer name="maxi" data={data.maxi} />
        </div>
        <div className="CMS__content">
          <CMSPanelAddGallery />
          {displayGalleries()}
        </div>
      </div>
    );
  } else return <CMSPanelLogin />;
};

export default CMS;
