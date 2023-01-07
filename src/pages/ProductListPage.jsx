import { ProductList } from "../components/Product/ProductList";
import { Box } from "@mui/material";
import { Banner } from '../components/UI/Banner';


const ProductListPage = () => {

    return (
        <Box minHeight='100vh'>
            <Banner />
            <ProductList />
        </Box>
    );
};

export default ProductListPage;
