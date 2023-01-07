
import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";
import { Selector } from './Selector';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Products from "../../asset/productList.json";

export const ProductList = () => {
    const navigate = useNavigate();
    const redirect = (url) => navigate(`/product/${url}`);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
    const [selectedProductList, setSelectedProductList] = useState(Products);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Selector setSelectedProductList={setSelectedProductList} />
            <ImageList cols={isMobileView ? 1 : 3} sx={{ width: '80%' }}>
                {selectedProductList.map((item, index) => (
                    item.img !== "" &&
                    <ImageListItem key={index}>
                        <Stack>
                            <Box
                                className="animate__animated animate__bounce"
                                onClick={() => redirect(item.url)}
                                width='100%'
                                component='img'
                                src={`${item.img}`}
                                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.en}
                                sx={{ cursor: 'pointer' }}
                            />
                            <ImageListItemBar
                                title={item.en}
                                subtitle={item.scientificName}
                                position="bottom"
                            />
                        </Stack>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box >
    );
};
