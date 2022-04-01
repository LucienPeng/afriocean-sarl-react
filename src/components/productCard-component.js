import React from "react";
import productList from "../asset/productList.json";

const productCardComponent = () => {
  return (
    <div className="productCard-section">
      <h2 className="text-center mb-5">Nos Produits</h2>
      <div className="container">
        <div
          className="row d-flex justify-content-around"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="col col-10  col-md-3 d-flex flex-column align-items-center justify-content-center">
            <div className="img-container col-4">
              <img className="img-fluid" src={productList[9].url} alt="" />
            </div>
            <h3>Produits Congelés</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              perferendis voluptates odit laboriosam itaque distinctio nihil
              assumenda non inventore. Ipsum laudantium accusantium vitae alias
              blanditiis.
            </p>
          </div>
          <div className="col col-10  col-md-3 d-flex flex-column align-items-center justify-content-center">
            <div className="img-container col-4">
              <img className="img-fluid" src={productList[13].url} alt="" />
            </div>
            <h3>Produits Élaborés</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              perferendis voluptates odit laboriosam itaque distinctio nihil
              assumenda non inventore. Ipsum laudantium accusantium vitae alias
              blanditiis.
            </p>
          </div>
          <div className="col col-10  col-md-3 d-flex flex-column align-items-center justify-content-center">
            <div className="img-container col-4">
              <img className="img-fluid" src={productList[15].url} alt="" />
            </div>
            <h3>Produits Personnalisés</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              perferendis voluptates odit laboriosam itaque distinctio nihil
              assumenda non inventore. Ipsum laudantium accusantium vitae alias
              blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productCardComponent;
