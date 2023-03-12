
import { Box, ImageListItem, ImageListItemBar, Stack, Skeleton } from "@mui/material";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductListImageListItem = (props) => {
    const { item } = props;
    const [imageLoaded, setImageLoaded] = useState(false);
    const navigate = useNavigate();
    const redirect = (category, url) => navigate(`/product/${category.toLowerCase()}/${url}`);
    const onLoadHandler = useCallback((loaded) => setImageLoaded(loaded), []);

    return (
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
                {!imageLoaded && <Skeleton sx={{ width: '100%', minHeight: 300, height: '100%' }} />}
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
