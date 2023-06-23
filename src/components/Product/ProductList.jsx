
import { Box, ImageList } from "@mui/material";
import { Selector, MobileSelector } from './Selector';
import { ProductListImageListItem } from './ProductListImageLisItem';
import { useState } from "react";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";

export const ProductList = (props) => {
    const { isMobileView } = useDeviceMetadata();
    const [productList, setProductList] = useState(props.data);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', my: 25 }}>
            {isMobileView ? <MobileSelector setProductList={setProductList} data={props.data} /> : <Selector setProductList={setProductList} data={props.data} />}
            <ImageList cols={isMobileView ? 1 : 3} sx={{ width: isMobileView ? '80%' : '90%' }} loading="lazy">
                {productList.map((item) => (
                    <ProductListImageListItem item={item} key={item.en} />
                ))}
            </ImageList>
        </Box >
    );
};
