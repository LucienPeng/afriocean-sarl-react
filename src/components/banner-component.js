import React, { useEffect, useState } from "react";

const BannerComponent = (props) => {
  let { banner, setBanner } = props;
  if (banner === "About") {
    setBanner("A Propos De Nous");
  } else if (banner === "Products") {
    setBanner("Produits Congelés");
  } else if (banner === "Contacts") {
    setBanner("Nos Contacts");
  }

  useEffect(() => {
    const bannerBG = document.querySelector(".banner");

    if (banner === "About") {
      bannerBG.style.backgroundImage = "url('https://i.imgur.com/91HsHO9.png')";
    } else if (banner === "Produits") {
      bannerBG.style.backgroundImage = "url('https://i.imgur.com/TVwg40t.png')";
    } else if (banner === "Contacts") {
      bannerBG.style.backgroundImage = "url('https://i.imgur.com/FmMl19C.png')";
    }
  });

  return (
    <div className="banner d-flex justify-content-center align-items-center">
      <h2 className="display-4">{banner}</h2>
    </div>
  );
};

export default BannerComponent;
