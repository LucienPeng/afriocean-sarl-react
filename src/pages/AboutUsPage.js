import React, { useState, useEffect } from "react";
import BannerComponent from "../components/Banner";
import PresentationComponent from "../components/presentation-component";
import EquipmentComponent from "../components/equipment-component";
import { Outlet } from "react-router-dom";

const AboutPage = (props) => {
    let { banner, setBanner } = props;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    });

    return (
        <div className="aboutPage">
            <BannerComponent />
            <Outlet />
            {/* <PresentationComponent />
            <EquipmentComponent /> */}
        </div>
    );
};

export default AboutPage;
