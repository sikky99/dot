import React from "react";
import DotNav from "../pages-sections/Components-Sections/DotNav";
import IconsSection from "../pages-sections/Components-Sections/IconsSection";
const dot = () => {
  return (
    <div>
      <DotNav />
      <img
        style={{ width: "100vw", marginTop: "-13vh" }}
        src={require("../assets/img/pexels-fauxels-3184292.jpg")}
      />
      <IconsSection />
    </div>
  );
};

export default dot;
