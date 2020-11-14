import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import updateDb from "../../utils/updateDb";
import uploadImg from "../../utils/uploadImg";
import resizeImg from "../../utils/resizeImg";
import "./index.scss";

const CMSPanelImage = ({ name }) => {
  const inputRef = useRef(null);
  const key = uuid();
  const data = {};

  const handleBtn = async () => {
    const file = inputRef.current.files[0];
    if (file) {
      const lg = await resizeImg(file, 1920);
      const md = await resizeImg(file, 1024);
      const sm = await resizeImg(file, 736);

      const arr = { sm, md, lg };

      for (const item in arr) {
        const file = arr[item];
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
    } else alert("nie dodano plików");
  };

  return (
    <div className="galleryPanel">
      <label className="galleryPanel__label">
        {"photo"}
        <input ref={inputRef} type="file" className="galleryPanel__input" />
      </label>
      <button className="CMS__btn" onClick={handleBtn}>
        Dodaj
      </button>
    </div>
  );
};
export default CMSPanelImage;
