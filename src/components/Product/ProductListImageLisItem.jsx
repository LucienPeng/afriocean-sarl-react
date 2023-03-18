
import { Box, ImageListItem, ImageListItemBar, Stack, Skeleton } from "@mui/material";
import { useCallback, useState } from "react";
import { useDeviceMetadata } from "../../utils/useDeviceMetadata";
import { useNavigation } from "../../utils/useNavigation";

export const ProductListImageListItem = (props) => {
    const { item } = props;
    const { navigationHandler } = useNavigation();
    const { isMobileView } = useDeviceMetadata();
    const [imageLoaded, setImageLoaded] = useState(false);
    const redirect = (category, url) => navigationHandler(`/product/${category.toLowerCase()}/${url}`);
    const onLoadHandler = useCallback((loaded) => setImageLoaded(loaded), []);

    return (
        <ImageListItem
            data-aos="zoom-in-down"
            key={item.en}
            onClick={() => redirect(item.allergens, item.url)}
            sx={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                '&:hover': { cursor: 'pointer', bgcolor: !isMobileView && 'secondary.light' }
            }}>

            <Stack>
                {!imageLoaded && <Skeleton sx={{ width: '100%', minHeight: isMobileView ? 150 : 300, height: '100%' }} />}
                <Box
                    className="animate__animated animate__zoomIn animate__delay-1s"
                    width='100%'
                    component='img'
                    loading="lazy"
                    onLoad={() => onLoadHandler(true)}
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
    );
};
