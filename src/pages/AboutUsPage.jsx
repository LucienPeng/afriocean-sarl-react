import React, { useRef } from "react";
import { Introduction } from "../components/AboutUs/Introduction";
import { Equipment } from '../components/AboutUs/Equipment';
import { Banner } from "../components/UI/Banner";
import { Box } from "@mui/material";
import { ScrollTop } from '../components/UI/ScrollToTop';


const AboutPage = () => {
    const pageRef = useRef();

    return (
        <Box minHeight='100vh' width='100%' ref={pageRef}>
            <Banner />
            <Introduction />
            <Equipment />
            <ScrollTop pageRef={pageRef} />
        </Box>
    );
};

export default AboutPage;
