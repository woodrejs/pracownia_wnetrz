import React, { useRef } from "react";
import updateDb from "../../utils/updateDb";

const TextInput = ({ name, docName, keyName, content }) => {
  const inputRef = useRef(null);

  const handleBtn = () => {
    const inputVal = inputRef.current.value;

    inputVal.length > 3
      ? updateDb(docName, keyName, inputVal)
      : alert("tekst musi mieć conajmniej 3 znaki");
  };

  return (
    <label className="CMS__subTitle">
      {name}
      <textarea
        ref={inputRef}
        placeholder={content}
        className="textInput__area"
        cols="30"
        rows="10"
      ></textarea>
      <button className="CMS__btn" onClick={handleBtn}>
        zamień
      </button>
    </label>
  );
};
export default TextInput;
