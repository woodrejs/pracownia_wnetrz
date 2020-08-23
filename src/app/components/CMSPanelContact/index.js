import React from "react";
import TitleInput from "../TitleInput";
import TextInput from "../TextInput";

const CMSPanelContact = ({ data }) => {
  return (
    <div className="CMS__box">
      <span className="CMS__title">Contact</span>
      <TitleInput
        name="Contact name"
        docName="contact"
        keyName="name"
        content={data.name}
      />
      <TitleInput
        name="Contact company"
        docName="contact"
        keyName="company"
        content={data.company}
      />
      <TextInput
        name="Contact address"
        docName="contact"
        keyName="address"
        content={data.address}
      />
    </div>
  );
};
export default CMSPanelContact;
