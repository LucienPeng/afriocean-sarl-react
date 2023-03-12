import { ProductList } from "../components/Product/ProductList";
import { Box } from "@mui/material";
import { Banner } from '../components/UI/Banner';


const ProductListPage = (props) => {

    return (
        <Box minHeight='100vh'>
            <Banner />
            <ProductList data={props.data} />
        </Box>
    );
};

export default ProductListPage;
