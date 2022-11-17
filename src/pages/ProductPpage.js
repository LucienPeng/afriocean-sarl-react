import React, { useState, useEffect } from "react";
import BannerComponent from "../components/banner-component";
import ProductComponent from "../components/Product";
import { Outlet } from "react-router-dom";


const ProductPage = (props) => {
    let { banner, setBanner } = props;
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    });

    return (
        <div>
            <BannerComponent banner={banner} setBanner={setBanner} />
            <Outlet />
            {/* <ProductComponent /> */}
        </div>
    );
};

export default ProductPage;
