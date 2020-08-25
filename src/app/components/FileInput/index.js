import React, { useRef, useState, useEffect } from "react";
import "./index.scss";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import handleFiles from "../../utils/handleFiles";

const FileInput = ({
  name,
  storagePath,
  cloudPath,
  sended = false,
  MAX_WIDTH,
  MAX_HEIGHT,
}) => {
  const inputRef = useRef(null);
  const db = firebase.firestore();
  const [send, setSend] = useState(sended);

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

  const handleBtn = () => {
    const file = inputRef.current.files[0];
    if (file) setSend(true);
    else alert("Należy wybrać plik");
  };

  useEffect(() => {
    if (send) uploadFile();
  }, [send]);

  return (
    <label className="cms__subTitle">
      {name}
      <input
        ref={inputRef}
        type="file"
        className="fileInput__input"
        // onChange={(e) => handleFiles(e, MAX_WIDTH, MAX_HEIGHT)}
      />
      <button className="CMS__btn" onClick={handleBtn}>
        zamień
      </button>
    </label>
  );
};

export default FileInput;
