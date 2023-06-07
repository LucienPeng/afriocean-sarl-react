import React from "react";
import { HeroBanner } from "../components/Hompage/HeroBanner";
import { Introduction } from "../components/Hompage/Introduction";
import { Product } from "../components/Hompage/Product";
import { Business } from "../components/Hompage/Business";
import { Contact } from "../components/Hompage/Contact";
import { ScrollTop } from '../components/UI/ScrollToTop';
import { Stack } from "@mui/material";

const HomePage = (props) => {
    let { homeRef, aboutRef, productRef, contactRef, serviceRef } = props;

    return (
        <Stack direction='column' alignItems='center' justifyContent='center'>
            <HeroBanner />
            <Introduction aboutRef={aboutRef} />
            <Business serviceRef={serviceRef} />
            <Product productRef={productRef} />
            <Contact contactRef={contactRef} />
            <ScrollTop pageRef={homeRef} />
        </Stack>
    );
};

export default HomePage;
