import React, { useState } from "react";
import BannerComponent from "../components/banner-component";
import PresentationComponent from "../components/presentation-component";
import EquipmentComponent from "../components/equipment-component";

const aboutPage = (props) => {
  let { banner, setBanner } = props;

  return (
    <div className="aboutPage">
      <BannerComponent banner={banner} setBanner={setBanner} />
      <PresentationComponent />
      <EquipmentComponent />
    </div>
  );
};

export default aboutPage;
