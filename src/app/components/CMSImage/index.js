import React from "react";
import deleteFromStorage from "../../utils/deleteFromStorage";
import deleteFromFirestore from "../../utils/deleteFromFirestore";

const CMSImage = ({ path, name, galleryName }) => {
  const handleBtn = () => {
    //delete from storage
    deleteFromStorage(path, `${name}_sm`);
    deleteFromStorage(path, `${name}_md`);
    deleteFromStorage(path, `${name}_lg`);

    //delete from firestore
    deleteFromFirestore(`${galleryName}.photos.${name}`);
  };

  return (
    <li>
      {name}
      <button className="CMS__btn" onClick={handleBtn}>
        delete
      </button>
    </li>
  );
};
export default CMSImage;
