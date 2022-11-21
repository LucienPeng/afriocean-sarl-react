import React from "react";
import { HeroBanner } from "../components/Hompage/HeroBanner";
import { Introduction } from "../components/Hompage/Introduction";
import { Service } from "../components/Hompage/Service";
import { Product } from "../components/Hompage/Product";
import { Contact } from "../components/Hompage/Contact";


const HomePage = (props) => {
    let { aboutRef, serviceRef, productRef, contactRef } = props;

    return (
        <>
            <HeroBanner />
            <Product productRef={productRef} />
            {/* <Introduction aboutRef={aboutRef} />
            <Service serviceRef={serviceRef} /> */}
            <Contact contactRef={contactRef} />
        </>
    );
};

export default HomePage;
