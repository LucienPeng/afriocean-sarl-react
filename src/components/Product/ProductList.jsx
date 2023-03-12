
import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";
import { Selector, MobileSelector } from './Selector';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ProductList = (props) => {
    const navigate = useNavigate();
    const redirect = (category, url) => navigate(`/product/${category.toLowerCase()}/${url}`);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
    const [productList, setProductList] = useState(props.data);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            {isMobileView ? <MobileSelector setProductList={setProductList} data={props.data} /> : <Selector setProductList={setProductList} data={props.data} />}
            <ImageList cols={isMobileView ? 1 : 3} sx={{ width: isMobileView ? '80%' : '90%' }} loading="lazy">
                {productList.map((item) => (
                    <ImageListItem
                        data-aos="zoom-in-down"
                        key={item.en}
                        onClick={() => redirect(item.allergens, item.url)}
                        sx={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            '&:hover': { cursor: 'pointer', bgcolor: 'secondary.light' }
                        }}>

                        <Stack>
                            <Box
                                className="animate__animated animate__zoomIn animate__delay-1s"
                                width='100%'
                                component='img'
                                loading="lazy"
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
