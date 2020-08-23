import React from "react";
import FileInput from "../FileInput";

const CMSPanelHero = () => {
  return (
    <div className="CMS__box">
      <span className="CMS__title">Hero</span>
      <FileInput
        name="SM"
        storagePath="main/sm/"
        cloudPath={{
          collection: "cms",
          doc: "hero",
          key: "sm",
        }}
      />
      <FileInput
        name="MD"
        storagePath="main/md/"
        cloudPath={{
          collection: "cms",
          doc: "hero",
          key: "md",
        }}
      />
      <FileInput
        name="LG"
        storagePath="main/lg/"
        cloudPath={{
          collection: "cms",
          doc: "hero",
          key: "lg",
        }}
      />
    </div>
  );
};
export default CMSPanelHero;
