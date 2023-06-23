import { ProductList } from "../../components/Product/ProductList";
import { Box } from "@mui/material";


const ProductListPage = (props) => {

    return (
        <Box minHeight='100vh'>
            <ProductList data={props.data} />
        </Box>
    );
};

export default ProductListPage;
