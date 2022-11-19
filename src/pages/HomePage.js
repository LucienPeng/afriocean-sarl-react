import React from "react";
import { HeroBanner } from "../components/Hompage/HeroBanner";
import { Introduction } from "../components/Hompage/Introduction";
import { Service } from "../components/Hompage/Service";
import { Product } from "../components/Hompage/Product";
import { Contact } from "../components/Hompage/Contact";


const HomePage = (props) => {
    let { banner, homeRef, setBanner, aboutRef, serviceRef, productRef, contactRef } = props;


    return (
        <>
            <HeroBanner />
            <Introduction aboutRef={aboutRef} banner={banner} setBanner={setBanner} />
            <Service serviceRef={serviceRef} />
            <Product productRef={productRef} banner={banner} setBanner={setBanner} />
            <Contact contactRef={contactRef} />
        </>
    );
};

export default HomePage;
