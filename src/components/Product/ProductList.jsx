
import { Box, ImageList } from "@mui/material";
import { Selector, MobileSelector } from './Selector';
import { ProductListImageListItem } from './ProductListImageLisItem';
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ProductList = (props) => {
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
    const [productList, setProductList] = useState(props.data);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            {isMobileView ? <MobileSelector setProductList={setProductList} data={props.data} /> : <Selector setProductList={setProductList} data={props.data} />}
            <ImageList cols={isMobileView ? 1 : 3} sx={{ width: isMobileView ? '80%' : '90%' }} loading="lazy">
                {productList.map((item) => (
                    <ProductListImageListItem item={item} key={item.en} />
                ))}
            </ImageList>
        </Box >
    );
};
