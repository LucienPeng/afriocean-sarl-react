import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const ServicePageLayout = () => {

    return (
        <Box>
            <Outlet />
        </Box>
    );
};

export default ServicePageLayout;
