import React from "react";
import TitleInput from "../TitleInput";
import TextInput from "../TextInput";

const CMSPanelContact = ({ data }) => {
  return (
    <div className="CMS__box">
      <span className="CMS__title">Contact</span>
      <TitleInput
        name="name"
        docName="contact"
        keyName="name"
        content={data.name}
      />
      <TitleInput
        name="company"
        docName="contact"
        keyName="company"
        content={data.company}
      />
      <TextInput
        name="mail"
        docName="contact"
        keyName="mail"
        content={data.mail}
      />
      <TextInput
        name="phone"
        docName="contact"
        keyName="phone"
        content={data.phone}
      />
      <TextInput
        name="nip"
        docName="contact"
        keyName="nip"
        content={data.nip}
      />
    </div>
  );
};
export default CMSPanelContact;
