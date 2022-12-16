import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import productList from "../../asset/productList.json";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const ProductList = () => {
    const navigate = useNavigate();
    const redirect = (url) => navigate(`/product/${url}`);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            <ImageList variant="woven" cols={isMobileView ? 1 : 3}  >
                {productList.map((item, index) => (
                    <ImageListItem key={index}>
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
                    </ImageListItem>
                ))}
            </ImageList>
        </Box >
    );
};
