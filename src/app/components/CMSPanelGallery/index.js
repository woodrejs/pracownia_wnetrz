import React from "react";
import { v4 as uuid } from "uuid";
import CMSPanelImage from "../CMSPanelImage";
import CMSImage from "../CMSImage";
import deleteFromStorage from "../../utils/deleteFromStorage";
import deleteFromFirestore from "../../utils/deleteFromFirestore";

const CMSPanelGallery = ({ name, data }) => {
  const photos = data[name].photos;

  const displayPhotos = () => {
    const photosArray = [];
    for (const photo in photos) {
      photosArray.push(
        <CMSImage
          key={uuid()}
          name={photo}
          galleryName={name}
          path={`gallery/${name}/photos/${photo}`}
        />
      );
    }
    return photosArray;
  };

  const handleClick = () => {
    //delete from storage
    for (const photo in photos) {
      deleteFromStorage(`gallery/${name}/photos/${photo}`, `${photo}_sm`);
      deleteFromStorage(`gallery/${name}/photos/${photo}`, `${photo}_md`);
      deleteFromStorage(`gallery/${name}/photos/${photo}`, `${photo}_lg`);
    }

    //delete from firestore
    deleteFromFirestore(name);
  };

  return (
    <div className="CMS__box">
      <button onClick={handleClick}>delete gallery</button>
      <span className="CMS__title">{name}</span>
      <span className="CMS__subTitle">Dodaj zdjęcie</span>
      <div className="CMS__subBox">
        <CMSPanelImage name={name} />
      </div>
      <span className="CMS__subTitle">Zdjęcia</span>
      <ul className="CMS__subBox">{displayPhotos()}</ul>
    </div>
  );
};
export default CMSPanelGallery;
