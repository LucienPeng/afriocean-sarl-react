import React from "react";
import { HeroBanner } from "../components/Hompage/HeroBanner";
import { Introduction } from "../components/Hompage/Introduction";
import { Product } from "../components/Hompage/Product";
import { Business } from "../components/Hompage/Business";
import { Contact } from "../components/Hompage/Contact";
import { ScrollTop } from '../components/UI/ScrollToTop';
import { Stack } from "@mui/material";


const HomePage = (props) => {
    let { homeRef, aboutRef, productRef, contactRef } = props;

    return (
        <Stack width='100%' alignItems='center' justifyContent='center'>
            <HeroBanner />
            <Introduction aboutRef={aboutRef} />
            <Business />
            <Product productRef={productRef} />
            <Contact contactRef={contactRef} />
            <ScrollTop pageRef={homeRef} />
        </Stack>
    );
};

export default HomePage;
