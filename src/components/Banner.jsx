import React from "react";
import { useHomepageTranslation } from '../i18n/useTranslations';

const BannerComponent = (props) => {
    const { t } = useHomepageTranslation();
    const banner = 'https://i.imgur.com/1kb3oIQ.jpg';

    return (
        <div
            id="banner"
            className=" d-flex banner justify-content-center align-items-center"
        >
            {!banner && (
                <h2 className="display-4 animate__animated animate__zoomIn">
                    AFRIOCEAN SARL
                </h2>
            )}
        </div>
    );
};

export default BannerComponent;
