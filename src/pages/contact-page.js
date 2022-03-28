import React, { useState } from "react";
import BannerComponent from "../components/banner-component";
import ContactComponent from "../components/contact-component";

const contactPage = (props) => {
  let { banner, setBanner } = props;

  return (
    <div>
      <BannerComponent banner={banner} setBanner={setBanner} />
      <ContactComponent />
    </div>
  );
};

export default contactPage;
