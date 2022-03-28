import React from "react";
import productList from "../asset/productList.json";
import FishComponent from "./fish-component";

const productComponent = () => {
  return (
    <div className="product-section container-fluid">
      <div className="row d-flex justify-content-center align-items-center flex-wrap">
        {productList.map((fish) => {
          return <FishComponent key={fish.id} data={fish} />;
        })}
      </div>
    </div>
  );
};

export default productComponent;
