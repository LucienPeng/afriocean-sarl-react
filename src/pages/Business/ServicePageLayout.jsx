import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Banner } from '../../components/UI/Banner';


const ServicePageLayout = () => {

    return (
        <Box>
            <Banner />
            <Outlet />
        </Box>
    );
};

export default ServicePageLayout;
