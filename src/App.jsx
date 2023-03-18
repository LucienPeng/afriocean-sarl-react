import "aos/dist/aos.css";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import { ProductItem } from "./components/Product/ProductItem";
import { Footer } from "./components/Footer";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUsPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPageLayout from "./pages/ProductPageLayout";
import ServicePageLayout from './pages/ServicePageLayout';
import FrozenProductPage from './pages/FrozenProductPage';
import CustomizedProductPage from './pages/CustomizedProductPage';
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./components/NotFoundPage";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useProductList } from "./asset/productList";
import { useTranslation } from "react-i18next";

const App = () => {
    const { FISH_PRODUCTS, SEAFOOD_PRODUCTS } = useProductList();
    const [searchParams, setSearchParams] = useSearchParams();
    const [banner, setBanner] = useState("");
    const homeRef = useRef();
    const aboutRef = useRef();
    const productRef = useRef();
    const contactRef = useRef();
    const trigger = useScrollTrigger({ threshold: 100 });
    const { i18n } = useTranslation();
    const languageSearchParam = searchParams.get('lang');

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [trigger]);

    useEffect(() => {
        if (languageSearchParam !== i18n.language) setSearchParams({ lang: i18n.language });
    }, [i18n.language, languageSearchParam, setSearchParams]);

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

                <Route path="/service" element={<ServicePageLayout />}>
                    <Route path='frozen-product' element={<FrozenProductPage />} />
                    <Route path='customized-product' element={<CustomizedProductPage />} />
                </Route>

                <Route path="/product" element={<ProductPageLayout />}>
                    <Route path='/product/fish' element={<ProductListPage data={FISH_PRODUCTS} />} />
                    {FISH_PRODUCTS.map((item, index) => <Route key={index} path={`/product/fish/${item.url}`} element={<ProductItem item={item} />} />)}
                    <Route path='/product/seafood' element={<ProductListPage data={SEAFOOD_PRODUCTS} />} />
                    {SEAFOOD_PRODUCTS.map((item, index) => <Route key={index} path={`/product/seafood/${item.url}`} element={<ProductItem item={item} />} />)}
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
