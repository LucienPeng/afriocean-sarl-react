import React, { useState, useEffect } from "react";
import BannerComponent from "../components/banner-component";
import PresentationComponent from "../components/presentation-component";
import EquipmentComponent from "../components/equipment-component";

const AboutPage = (props) => {
  let { banner, setBanner } = props;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  return (
    <div className="aboutPage">
      <BannerComponent banner={banner} setBanner={setBanner} />
      <PresentationComponent />
      <EquipmentComponent />
    </div>
  );
};

export default AboutPage;
