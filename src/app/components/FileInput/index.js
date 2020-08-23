import React, { useRef, useState, useEffect } from "react";
import "./index.scss";
import firebase from "firebase";
import { v4 as uuid } from "uuid";

const FileInput = ({ name, storagePath, cloudPath, sended = false }) => {
  const inputRef = useRef(null);
  const db = firebase.firestore();
  const [send, setSend] = useState(sended);

  //wyciac uploadFile ???
  const uploadFile = async () => {
    const file = inputRef.current.files[0];
    const fileName = file.name + uuid();
    const storageRef = firebase.storage().ref(`${storagePath}${fileName}`);

    await storageRef.put(file);
    const url = await storageRef.getDownloadURL();

    db.collection(cloudPath.collection)
      .doc(cloudPath.doc)
      .update({
        [cloudPath.key]: url,
      });

    setSend(false);
    alert("plik dodany");
  };

  useEffect(() => {
    if (send) uploadFile();
  }, [send]);

  const handleBtn = () => {
    const file = inputRef.current.files[0];
    if (file) setSend(true);
    else alert("Należy wybrać plik");
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
