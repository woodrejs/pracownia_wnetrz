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
        MAX_WIDTH={736}
        MAX_HEIGHT={414}
      />
      <FileInput
        name="MD"
        storagePath="main/md/"
        cloudPath={{
          collection: "cms",
          doc: "hero",
          key: "md",
        }}
        MAX_WIDTH={1024}
        MAX_HEIGHT={768}
      />
      <FileInput
        name="LG"
        storagePath="main/lg/"
        cloudPath={{
          collection: "cms",
          doc: "hero",
          key: "lg",
        }}
        MAX_WIDTH={1920}
        MAX_HEIGHT={1080}
      />
    </div>
  );
};
export default CMSPanelHero;
