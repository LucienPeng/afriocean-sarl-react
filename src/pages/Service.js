import React, { useState, useEffect } from "react";
import BannerComponent from "../components/Banner";
import { Outlet } from "react-router-dom";

const ServicePage = (props) => {

    // useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: "instant" });
    // });

    return (
        <div className="aboutPage">
            <BannerComponent />
            <Outlet />
        </div>
    );
};

export default ServicePage;
