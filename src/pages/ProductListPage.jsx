import { ProductList } from "../components/Product/ProductList";
import { Box } from "@mui/material";
import { Banner } from '../components/UI/Banner';


const ProductListPage = () => {

    return (
        <Box>
            <Banner />
            <ProductList />
        </Box>
    );
};

export default ProductListPage;
