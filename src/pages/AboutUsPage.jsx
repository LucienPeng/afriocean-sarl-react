import React from "react";
import { Introduction } from "../components/AboutUs/Introduction";
import { Equipment } from '../components/AboutUs/Equipment';
import { Banner } from "../components/UI/Banner";
import { Box } from "@mui/material";

const AboutPage = () => {

    return (
        <Box minHeight='100vh' width='100%'>
            <Banner />
            <Introduction />
            <Equipment />
        </Box>
    );
};

export default AboutPage;
