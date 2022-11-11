import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import productList from "../../asset/productList.json";

export const Product = (props) => {
    const navigate = useNavigate();
    let { setBanner, productRef } = props;

    const redirectHandle = () => {
        setBanner("Produits de qualité");
        navigate("/product");
    };

    return (
        <Stack component='div' ref={productRef} minHeight="100vh" justifyContent='center' alignItems='center'>
            <Typography variant="h3" color="initial">產品</Typography>
            <div className="container-fluid mt-5">
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
            </div>
        </Stack>
    );
};
