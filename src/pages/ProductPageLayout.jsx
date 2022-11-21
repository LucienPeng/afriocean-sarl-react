import React from "react";
import BannerComponent from "../components/Banner";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";


const ProductPageLayout = (props) => {

    return (
        <Box>
            {/* <BannerComponent /> */}
            <Outlet />
        </Box>
    );
};

export default ProductPageLayout;
