
import { ImageListItem, ImageListItemBar, Box, Stack, LinearProgress } from "@mui/material";
import { useCallback, useState, useRef, useMemo } from "react";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import { useNavigation } from "../../utils/useNavigation";
import { useTranslation } from 'react-i18next';

export const ProductListImageListItem = (props) => {
    const { item } = props;
    const { navigationHandler } = useNavigation();
    const { isMobileView } = useDeviceMetadata();
    const { i18n } = useTranslation();
    const [imageLoaded, setImageLoaded] = useState(false);
    const redirect = (category, url) => navigationHandler(`/product/${category.toLowerCase()}/${url}`);
    const onLoadHandler = useCallback(() => setImageLoaded(true), []);
    const imageListItemRef = useRef();
    const imageRef = useRef();

    const productName = useMemo(() => {
        if (i18n.language === 'zh-TW') {
            return item.cn;
        } else if (i18n.language === 'en') {
            return item.en;
        } else if (i18n.language === 'fr') {
            return item.fr;
        }
    }, [i18n.language, item.cn, item.en, item.fr]);


    return (
        <ImageListItem
            ref={imageListItemRef}
            data-aos="zoom-in"
            key={item.en}
            onClick={() => redirect(item.allergens, item.url)}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                '&:hover': { cursor: 'pointer', bgcolor: !isMobileView && 'secondary.light' }
            }}
        >
            <Stack>
                {!imageLoaded && <LinearProgress animation="wave" />}
                <Box
                    ref={imageRef}
                    className="animate__animated animate__zoomIn animate__delay-1s"
                    width='100%'
                    component='img'
                    loading="lazy"
                    onLoad={onLoadHandler}
                    src={`${item.img}`}
                    alt={item.en}
                />
                {imageLoaded && <ImageListItemBar
                    title={productName}
                    subtitle={item.scientificName}
                    position="bottom"
                />
                }
            </Stack>
        </ImageListItem>
    );
};
