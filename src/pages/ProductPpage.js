import React, { useState, useEffect } from "react";
import BannerComponent from "../components/banner-component";
import ProductComponent from "../components/Product";

const ProductPage = (props) => {
    let { banner, setBanner } = props;
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    });

    return (
        <div>
            <BannerComponent banner={banner} setBanner={setBanner} />
            <ProductComponent />
        </div>
    );
};

export default ProductPage;
