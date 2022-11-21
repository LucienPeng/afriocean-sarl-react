import React, { useEffect } from "react";
import BannerComponent from "../components/Banner";
import ProductComponent from "../components/Product";
import { Box } from "@mui/material";


const ProductPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    });

    return (
        <Box>
            <BannerComponent />
            <ProductComponent />
        </Box>
    );
};

export default ProductPage;
