import React, { useState, useEffect } from "react";
import BannerComponent from "../components/Banner";
import PresentationComponent from "../components/presentation-component";
import EquipmentComponent from "../components/equipment-component";

const AboutPage = (props) => {


    return (
        <div className="aboutPage">
            <BannerComponent />
            <PresentationComponent />
            <EquipmentComponent />
        </div>
    );
};

export default AboutPage;
