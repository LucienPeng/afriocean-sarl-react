import React from "react";
import { HeroBanner } from "../components/Hompage/HeroBanner";
import { Introduction } from "../components/Hompage/Introduction";
import { Service } from "../components/Hompage/Service";
import { Product } from "../components/Hompage/Product";
import { Contact } from "../components/Hompage/Contact";
import { ScrollTop } from '../components/Hompage/ScrollToTop';
import { Box } from "@mui/material";


const HomePage = (props) => {
    let { homeRef, aboutRef, serviceRef, productRef, contactRef } = props;

    return (
        <Box width='100%'>
            <HeroBanner />
            <Introduction aboutRef={aboutRef} />
            <Product productRef={productRef} />
            <Service serviceRef={serviceRef} />
            <Contact contactRef={contactRef} />
            <ScrollTop homeRef={homeRef} />
        </Box>
    );
};

export default HomePage;
