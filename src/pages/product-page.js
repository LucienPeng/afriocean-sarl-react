import React, { useState } from "react";
import BannerComponent from "../components/banner-component";
import ProductComponent from "../components/product-component";

const productPage = (props) => {
  let { banner, setBanner } = props;

  return (
    <div>
      <BannerComponent banner={banner} setBanner={setBanner} />
      <ProductComponent />
    </div>
  );
};

export default productPage;