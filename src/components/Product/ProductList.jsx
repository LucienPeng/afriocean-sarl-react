
import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";
import { Selector, MobileSelector } from './Selector';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { useProductList } from "../../asset/productList";
import useMediaQuery from '@mui/material/useMediaQuery';

export const ProductList = () => {
    const { PRODUCTS } = useProductList();
    const navigate = useNavigate();
    const redirect = (url) => navigate(`/product/${url}`);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
    const [productList, setProductList] = useState(PRODUCTS);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            {isMobileView ? <MobileSelector setProductList={setProductList} /> : <Selector setProductList={setProductList} />}
            <ImageList cols={isMobileView ? 1 : 3} sx={{ width: isMobileView ? '80%' : '90%' }} loading="lazy">
                {productList.map((item) => (
                    item.img !== "" &&
                    <ImageListItem
                        data-aos="zoom-in-down"
                        key={item.en}
                        onClick={() => redirect(item.url)}
                        sx={{
                            '&:hover': { cursor: 'pointer', bgcolor: 'secondary.light' }
                        }}>

                        <Stack>
                            <Box
                                className="animate__animated animate__zoomIn animate__delay-1s"
                                width='100%'
                                component='img'
                                src={`${item.img}`}
                                alt={item.en}
                                sx={{
                                    '&:hover': { transition: 'all 1s ease-out', transform: 'scale(1.1)', }
                                }}
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
