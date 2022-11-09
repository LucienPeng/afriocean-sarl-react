import React from "react";
import { HeroBanner } from "../components/HeroBanner";
import IntroComponent from "../components/intro-component";
import ValeurComponent from "../components/valeur-component";
import ProductCardComponent from "../components/productCard-component";
import ContactComponent from "../components/contact-component";

const HomePage = (props) => {
    let { banner, setBanner, aboutRef } = props;

    return (
        <>
            <HeroBanner />
            <IntroComponent aboutRef={aboutRef} banner={banner} setBanner={setBanner} />
            <ValeurComponent />
            <ProductCardComponent banner={banner} setBanner={setBanner} />
            <ContactComponent />
        </>
    );
};

export default HomePage;
