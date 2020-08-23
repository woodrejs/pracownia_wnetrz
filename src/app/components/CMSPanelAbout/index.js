import React from "react";
import TextInput from "../TextInput";

const CMSPanelAbout = ({ data }) => {
  return (
    <div className="CMS__box">
      <span className="CMS__title">About</span>
      <TextInput
        name="add about"
        docName="about"
        keyName="dscpt"
        content={data.dscpt}
      />
    </div>
  );
};
export default CMSPanelAbout;
