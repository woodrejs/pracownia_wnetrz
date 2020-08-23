import React from "react";
import TitleInput from "../TitleInput";
import TextInput from "../TextInput";

const CMSPanelOffer = ({ name, data }) => {
  return (
    <div className="CMS__box">
      <span className="CMS__title">{name}</span>
      <TitleInput
        name="price"
        docName={name}
        keyName="price"
        content={data.price}
      />
      <TextInput
        name="dscpt"
        docName={name}
        keyName="dscpt"
        content={data.dscpt}
      />
      <TextInput
        name="short dscpt"
        docName={name}
        keyName="short"
        content={data.short}
      />
      <TextInput
        name="long dscpt"
        docName={name}
        keyName="long"
        content={data.long}
      />
    </div>
  );
};
export default CMSPanelOffer;
