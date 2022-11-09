import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUsPage";
import ProductPage from "./pages/ProductPpage";
import FooterComponent from "./components/footer-component";
import ContactPage from "./pages/ContactPage";
import NotFoundComponent from "./components/notFound-component";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    let [banner, setBanner] = useState("");
    const homeRef = useRef();
    const aboutRef = useRef();
    const serviceRef = useRef();
    const productRef = useRef();
    const contactRef = useRef();


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <NavBar
                homeRef={homeRef}
                aboutRef={aboutRef}
                serviceRef={serviceRef}
                productRef={productRef}
                contactRef={contactRef} banner={banner} setBanner={setBanner} />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage
                        homeRef={homeRef}
                        aboutRef={aboutRef}
                        serviceRef={serviceRef}
                        productRef={productRef}
                        contactRef={contactRef}
                        banner={banner} setBanner={setBanner} />}
                />
                <Route
                    path="/about"
                    element={<AboutPage banner={banner} setBanner={setBanner} />}
                />
                <Route
                    path="/product"
                    element={<ProductPage banner={banner} setBanner={setBanner} />}
                />
                <Route
                    path="/contact"
                    element={<ContactPage banner={banner} setBanner={setBanner} />}
                />
                <Route path="/*" element={<NotFoundComponent />} />
            </Routes>
            <FooterComponent />
        </>
    );
};

export default App;
