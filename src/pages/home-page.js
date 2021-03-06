import React from "react";
import MainbannerComponent from "../components/mainBanner-component";
import IntroComponent from "../components/intro-component";
import ValeurComponent from "../components/valeur-component";
import ProductCardComponent from "../components/productCard-component";
import ContactComponent from "../components/contact-component";
import { useState } from "react";

const HomePage = (props) => {
  let { banner, setBanner } = props;

  return (
    <div className="homePage">
      <MainbannerComponent />
      <IntroComponent banner={banner} setBanner={setBanner} />
      <ValeurComponent />
      <ProductCardComponent banner={banner} setBanner={setBanner} />
      <ContactComponent />
    </div>
  );
};

export default HomePage;
