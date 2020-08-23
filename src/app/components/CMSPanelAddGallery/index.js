import React from "react";
import TitleInput from "../TitleInput";

const CMSPanelAddGallery = () => {
  return (
    <div className="CMS__box">
      <span className="CMS__title">Gallery</span>
      <TitleInput name="add gallery" docName="gallery" isGallery={true} />
    </div>
  );
};

export default CMSPanelAddGallery;
