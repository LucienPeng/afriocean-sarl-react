import React, { useEffect, useState } from "react";

const BannerComponent = (props) => {
  let { banner, setBanner } = props;

  useEffect(() => {
    const bannerBG = document.querySelector(".banner");

    if (banner === "Entreprise") {
      setBanner("A Propos De Nous");
      bannerBG.style.backgroundImage = "url('https://i.imgur.com/f8srmMn.png')";
    } else if (banner === "Produits") {
      setBanner("Produits de qualité");
      bannerBG.style.backgroundImage = "url('https://i.imgur.com/QVGaSAa.png')";
    } else if (banner === "Contacts") {
      setBanner("Contactez-nous");
      bannerBG.style.backgroundImage = "url('https://i.imgur.com/W9FyHAY.jpg')";
    }
  }, []);

  return (
    <div className="banner d-flex justify-content-center align-items-center">
      {banner && (
        <h2 className="display-4 animate__animated animate__zoomIn">
          {banner}
        </h2>
      )}
    </div>
  );
};

export default BannerComponent;
