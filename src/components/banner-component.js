import React, { useEffect, useState } from "react";
import { useHomepageTranslation } from '../i18n/useTranslations';

const BannerComponent = (props) => {
    let { banner, setBanner } = props;
    const { t } = useHomepageTranslation();
    
    useEffect(() => {
        const bannerBG = document.querySelector(".banner");
        if (banner === "Entreprise") {
            setBanner("A Propos De Nous");
            bannerBG.style.backgroundImage = "url('https://i.imgur.com/1kb3oIQ.jpg')";
            bannerBG.style.backgroundPosition = "top";
        } else if (banner === "Produits") {
            setBanner("Produits de qualité");
            bannerBG.style.backgroundImage = "url('https://i.imgur.com/W9FyHAY.jpg')";
            bannerBG.style.backgroundPosition = "center";
        } else if (banner === "Contacts") {
            setBanner("Contactez-nous");
            bannerBG.style.backgroundImage = "url('https://i.imgur.com/U8DauaI.jpg')";
        }
    });

    return (
        <div
            id="banner"
            className=" d-flex banner justify-content-center align-items-center"
        >
            {banner && (
                <h2 className="display-4 animate__animated animate__zoomIn">
                    {banner}
                </h2>
            )}
            {!banner && (
                <h2 className="display-4 animate__animated animate__zoomIn">
                    AFRIOCEAN SARL
                </h2>
            )}
        </div>
    );
};

export default BannerComponent;
