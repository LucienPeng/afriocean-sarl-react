import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import productList from "../../asset/productList.json";

const PRODUCTS_SECTIONS = [
    { title: 'PRODUCT1', url: 'p1' },
    { title: 'PRODUCT2', url: 'p2' },
    { title: 'PRODUCT3', url: 'p3' },
    { title: 'PRODUCT4', url: 'p4' },
    { title: 'PRODUCT5', url: 'p5' },
    { title: 'PRODUCT6', url: 'p6' },
    { title: 'PRODUCT7', url: 'p7' },
    { title: 'PRODUCT8', url: 'p8' },
    { title: 'PRODUCT9', url: 'p9' },
];

export const Product = (props) => {
    const navigate = useNavigate();
    let { setBanner, productRef } = props;

    const redirectHandle = (url) => {
        navigate(`/product/${url}`);
    };

    return (
        <Stack component='div' ref={productRef} minHeight="100vh" justifyContent='center' alignItems='center'>
            <Typography mb={5} variant="h3" color="initial">Products</Typography>
            <Stack flexShrink={0} justifyContent='center' alignItems='center' direction='row' spacing={10} >
                {PRODUCTS_SECTIONS.map((product, index) => (
                    <Stack key={index} direction='column' alignItems='center'>
                        <Typography variant="h3" color="initial">{product.title}</Typography>
                        <Button onClick={redirectHandle.bind(this, product.url)} variant="text" color="primary">Go to {product.title}</Button>
                    </Stack>
                ))}
            </Stack>
            {/* <div className="container-fluid mt-5">
                <div className="row d-flex flex-md-nowrap gy-5 justify-content-around">
                    <div
                        className="col col-10 col-sm-4 col-md-3 d-flex flex-column align-items-center justify-content-start"
                        data-aos="zoom-in-up"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <div className="img-container col-4" onClick={redirectHandle}>
                            <img className="img-fluid" src={productList[9].url} alt="" />
                        </div>
                        <h3>Produits Congelés</h3>
                        <p>
                            Produisant plus de 5.000 tonnes par an juste avec les mareyeurs
                            locaux, Afriocean possède une grande capacité de production et
                            fourni une masse diversité d'espèces de poisson au Sénégal.
                        </p>
                    </div>
                    <div
                        className="col col-10 col-sm-4 col-md-3 d-flex flex-column align-items-center justify-content-start"
                        data-aos="zoom-in-up"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <div className="img-container col-4" onClick={redirectHandle}>
                            <img className="img-fluid" src={productList[13].url} alt="" />
                        </div>
                        <h3>Produits Élaborés</h3>
                        <p>
                            Non seulement le poisson entier, Afriocean s'engage également à se
                            développer ses techniques pour fourir les produits plus délicates
                            et élaborés en tant que des brochettes ou des filets du poisson.
                        </p>
                    </div>
                    <div
                        className="col col-10  col-sm-4 col-md-3 d-flex flex-column align-items-center justify-content-start"
                        data-aos="zoom-in-up"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <div className="img-container col-4" onClick={redirectHandle}>
                            <img className="img-fluid" src={productList[15].url} alt="" />
                        </div>
                        <h3>Produits Personnalisés</h3>
                        <p>
                            D'après vos demandes et exiges, Afriocean est aussi capable de
                            travailler les produits personnalisés et de les exporter à votre
                            place.
                        </p>
                    </div>
                </div>
            </div> */}
        </Stack>
    );
};
