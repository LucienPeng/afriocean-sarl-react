import React from "react";
import BannerComponent from "../components/banner-component";
import PresentationComponent from "../components/presentation-component";
import EquipmentComponent from "../components/equipment-component";

const aboutPage = (props) => {
  return (
    <div className="aboutPage">
      <BannerComponent />
      <PresentationComponent />
      <EquipmentComponent />
    </div>
  );
};

export default aboutPage;
