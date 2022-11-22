import { Box } from "@mui/material";
import React from "react";
import productList from "../../asset/productList.json";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
    const navigate = useNavigate();
    const redirect = (url) => navigate(`/product/${url}`);
    return (
        <Box className="product-section container-fluid">
            <ImageList variant="woven" cols={3}  >
                {productList.map((item, index) => (
                    <ImageListItem key={index}>
                        <Box
                            onClick={redirect.bind(this, item.url)}
                            width='100%'
                            component='img'
                            src={`${item.img}`}
                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box >
    );
};
