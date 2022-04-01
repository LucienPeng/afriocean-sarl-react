import React, { useState, useEffect } from "react";
import BannerComponent from "../components/banner-component";
import ProductComponent from "../components/product-component";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductPage = (props) => {
  let { banner, setBanner } = props;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <BannerComponent banner={banner} setBanner={setBanner} />
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
