import React, { useRef, useState, useEffect } from "react";
import updateDb from "../../utils/updateDb";

const TitleInput = ({
  name = "",
  docName,
  keyName = null,
  sended = false,
  isGallery = false,
  content,
}) => {
  const inputRef = useRef(null);
  const [send, setSend] = useState(sended);

  useEffect(() => {
    if (send) {
      const inputVal = inputRef.current.value;
      const path = isGallery ? inputVal : keyName;
      const data = isGallery ? {} : inputVal;

      //add to firestore
      updateDb(docName, path, data);
      setSend(false);
    }
  }, [send]);

  const handleBtn = () => {
    const inputLength = inputRef.current.value.length;
    if (inputLength > 3) setSend(true);
    else alert("tekst musi mieć conajmniej 3 znaki");
  };

  return (
    <label className="CMS__subTitle">
      {name}
      <input ref={inputRef} type="text" placeholder={content} />
      <button className="CMS__btn" onClick={handleBtn}>
        zamień
      </button>
    </label>
  );
};

export default TitleInput;
