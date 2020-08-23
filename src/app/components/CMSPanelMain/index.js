import React from "react";
import TitleInput from "../TitleInput";
import TextInput from "../TextInput";

const CMSPanelMain = ({ data }) => {
  return (
    <div className="CMS__box">
      <span className="CMS__title">Main</span>
      <TitleInput
        name="Main title"
        docName="main"
        keyName="title"
        content={data.title}
      />
      <TextInput
        name="Main subtitle"
        docName="main"
        keyName="subTitle"
        content={data.subTitle}
      />
    </div>
  );
};
export default CMSPanelMain;
