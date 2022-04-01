import React, { useState, useEffect } from "react";
import BannerComponent from "../components/banner-component";
import PresentationComponent from "../components/presentation-component";
import EquipmentComponent from "../components/equipment-component";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = (props) => {
  let { banner, setBanner } = props;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="aboutPage">
      <BannerComponent banner={banner} setBanner={setBanner} />
      <PresentationComponent />
      <EquipmentComponent />
    </div>
  );
};

export default AboutPage;
