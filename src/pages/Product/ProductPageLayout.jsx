import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";


const ProductPageLayout = () => {

    return (
        <Box minHeight='100vh'>
            <Outlet />
        </Box>
    );
};

export default ProductPageLayout;
