
import { ImageListItem, ImageListItemBar, Skeleton, Box, Stack } from "@mui/material";
import { useCallback, useState, useRef } from "react";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import { useNavigation } from "../../utils/useNavigation";

export const ProductListImageListItem = (props) => {
    const { item } = props;
    const { navigationHandler } = useNavigation();
    const { isMobileView } = useDeviceMetadata();
    const [imageLoaded, setImageLoaded] = useState(false);
    const redirect = (category, url) => navigationHandler(`/product/${category.toLowerCase()}/${url}`);
    const onLoadHandler = useCallback((loaded) => setImageLoaded(loaded), []);
    const imageListItemRef = useRef();

    return (
        <ImageListItem
            ref={imageListItemRef}
            data-aos="zoom-in-down"
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
                {!imageLoaded && <Skeleton animation="wave" sx={{ width: '100%', height: '250px' }} />}
                <Box
                    className="animate__animated animate__zoomIn animate__delay-1s"
                    width='100%'
                    component='img'
                    loading="lazy"
                    onLoad={() => onLoadHandler(true)}
                    onError={() => onLoadHandler(false)}
                    src={`${item.img}`}
                    alt={item.en}
                    sx={{
                        height: '100%',
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
    );
};
