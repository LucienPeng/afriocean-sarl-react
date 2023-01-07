import "aos/dist/aos.css";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import { ProductItem } from "./components/Product/ProductItem";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUsPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPageLayout from "./pages/ProductPageLayout";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./components/NotFoundPage";
import itemList from './asset/productList.json';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const App = () => {
    let [banner, setBanner] = useState("");
    const homeRef = useRef();
    const aboutRef = useRef();
    const productRef = useRef();
    const contactRef = useRef();
    const trigger = useScrollTrigger({ threshold: 300 });

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [trigger]);

    return (
        <>
            <NavBar
                homeRef={homeRef}
                aboutRef={aboutRef}
                productRef={productRef}
                contactRef={contactRef} />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage
                        homeRef={homeRef}
                        aboutRef={aboutRef}
                        productRef={productRef}
                        contactRef={contactRef}
                    />}
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product" element={<ProductPageLayout />}>
                    <Route index element={<ProductListPage />} />
                    {itemList.map((item, index) => (
                        <Route key={index} path={item.url} element={<ProductItem item={item} />} />
                    ))}
                </Route>
                <Route
                    path="/contact"
                    element={<ContactPage banner={banner} setBanner={setBanner} />}
                />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
