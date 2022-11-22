import React, { useEffect } from "react";
import BannerComponent from "../components/Banner";
import { ProductList } from "../components/Product/ProductList";
import { Box } from "@mui/material";


const ProductPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    });

    return (
        <Box>
            <BannerComponent />
            <ProductList />
        </Box>
    );
};

export default ProductPage;
