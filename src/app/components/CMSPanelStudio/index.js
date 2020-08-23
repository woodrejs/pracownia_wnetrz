import React from "react";
import TextInput from "../TextInput";

const CMSPanelStudio = ({ data }) => {
  return (
    <div className="CMS__box">
      <span className="CMS__title">studio</span>
      <TextInput
        name="Studio"
        docName="studio"
        keyName="dscpt"
        content={data.dscpt}
      />
    </div>
  );
};
export default CMSPanelStudio;
