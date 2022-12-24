import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import productList from "../../asset/productList.json";
import { Banner } from '../UI/Banner';

export const ProductList = () => {
    const navigate = useNavigate();
    const redirect = (url) => navigate(`/product/${url}`);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Banner />
            <ImageList cols={isMobileView ? 1 : 3} sx={{ width: '70%' }}>
                {productList.map((item, index) => (
                    <ImageListItem key={index}>
                        {item.img !== "" &&
                            <Stack>
                                <Box
                                    onClick={redirect.bind(this, item.url)}
                                    width='100%'
                                    component='img'
                                    src={`${item.img}`}
                                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.en}
                                    loading="lazy"
                                    sx={{ cursor: 'pointer' }}
                                />
                                <ImageListItemBar
                                    title={item.en}
                                    subtitle={item.scientificName}
                                    position="bottom"
                                />
                            </Stack>
                        }
                    </ImageListItem>
                ))}
            </ImageList>
        </Box >
    );
};
