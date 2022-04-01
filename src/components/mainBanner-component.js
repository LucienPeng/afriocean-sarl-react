import React from "react";

const bannerComponent = () => {
  return (
    <div className="mainBanner d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-1 animate__animated animate__zoomIn">
        AFRIOCEAN SARL
      </h1>
      <p className="mb-5 animate__animated animate__slideInUp">
        — Produits Halieutiques De La Qualité —
      </p>
    </div>
  );
};

export default bannerComponent;
