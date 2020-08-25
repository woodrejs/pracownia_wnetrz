import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import updateDb from "../../utils/updateDb";
import uploadImg from "../../utils/uploadImg";
import "./index.scss";

const CMSPanelImage = ({ name }) => {
  const refArray = { sm: useRef(null), md: useRef(null), lg: useRef(null) };

  const handleBtn = async () => {
    const smFile = refArray.sm.current.files[0];
    const mdFile = refArray.md.current.files[0];
    const lgFile = refArray.lg.current.files[0];
    const key = uuid();
    const data = {};

    if (smFile && mdFile && lgFile) {
      for (const item in refArray) {
        const file = refArray[item].current.files[0];
        const fileName = `${key}_${item}`;
        //add to storage
        const cloudPath = `gallery/${name}/photos/${key}/${fileName}`;
        const url = await uploadImg(cloudPath, file);
        data[item] = url;
      }

      //add to firestore
      const dbPath = `${name}.photos.${key}`;
      updateDb("gallery", dbPath, data);

      alert("pliki dodane");
    } else alert("wszystkie rozmiary zdjecia muszą być dodane");
  };

  return (
    <div className="galleryPanel">
      <label className="galleryPanel__label">
        {"sm"}
        <input ref={refArray.sm} type="file" className="galleryPanel__input" />
      </label>
      <label className="galleryPanel__label">
        {"md"}
        <input ref={refArray.md} type="file" className="galleryPanel__input" />
      </label>
      <label className="galleryPanel__label">
        {"lg"}
        <input ref={refArray.lg} type="file" className="galleryPanel__input" />
      </label>
      <button className="CMS__btn" onClick={handleBtn}>
        zamień
      </button>
    </div>
  );
};
export default CMSPanelImage;
/*
   if (smFile && mdFile && lgFile) {
      const key = uuid();
      const data = {};
      for (const item in refArray) {
        const file = refArray[item].current.files[0];
        const fileName = `${key}_${item}`;
        //add to storage
        const cloudPath = `gallery/${name}/photos/${key}/${fileName}`;
        const url = await uploadImg(cloudPath, file);
        //add to firestore
        const dbPath = `${name}.photos.${key}.${item}`;
        updateDb("gallery", dbPath, url);
      }
      alert("pliki dodane");
    } else alert("wszystkie rozmiary zdjecia muszą być dodane");
  };
  */
