import React from "react";
import BannerComponent from "../components/banner-component";
import { Contact } from "../components/Hompage/Contact";

const contactPage = (props) => {
    let { banner, setBanner } = props;

    return (
        <div>
            <BannerComponent banner={banner} setBanner={setBanner} />
            <Contact />
        </div>
    );
};

export default contactPage;
