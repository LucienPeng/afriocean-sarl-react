import React from "react";
import MainbannerComponent from "../components/mainBanner-component";
import IntroComponent from "../components/intro-component";
import ValeurComponent from "../components/valeur-component";
import ProductCardComponent from "../components/productCard-component";
import ContactComponent from "../components/contact-component";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="homePage">
      <MainbannerComponent />
      <IntroComponent />
      <ValeurComponent />
      <ProductCardComponent />
      <ContactComponent />
    </div>
  );
};

export default HomePage;
