import React, { useRef } from "react";
import "./index.scss";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import resizeImg from "../../utils/resizeImg";

const FileInput = ({ name, storagePath, cloudPath, MAX_WIDTH }) => {
  const inputRef = useRef(null);
  const db = firebase.firestore();

  const uploadFile = async (file) => {
    const tmpFile = inputRef.current.files[0];
    const fileName = tmpFile.name + uuid();
    const storageRef = firebase.storage().ref(`${storagePath}${fileName}`);
    await storageRef.put(file);
    const url = await storageRef.getDownloadURL();

    db.collection(cloudPath.collection)
      .doc(cloudPath.doc)
      .update({
        [cloudPath.key]: url,
      });

    alert("plik dodany");
  };

  const handleBtn = async () => {
    const file = inputRef.current.files[0];
    file
      ? uploadFile(await resizeImg(file, MAX_WIDTH))
      : alert("Należy wybrać plik");
  };

  return (
    <label className="cms__subTitle">
      {name}
      <input ref={inputRef} type="file" className="fileInput__input" />
      <button className="CMS__btn" onClick={handleBtn}>
        zamień
      </button>
    </label>
  );
};

export default FileInput;
