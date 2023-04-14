import "aos/dist/aos.css";
import React, { useState, useEffect, useRef, useMemo } from "react";
import AOS from "aos";
import { ProductItem } from "./components/Product/ProductItem";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import HomePage from "./pages/HomePage";
import AboutUsPageLayout from "./pages/AboutUs/AboutUsPageLayout";
import HistoryPage from './pages/AboutUs/HistoryPage';
import FactoryPage from './pages/AboutUs/FactoryPage';
import VisionPage from './pages/AboutUs/VisionPage';
import QualityPage from './pages/AboutUs/QualityPage';
import ProductListPage from "./pages/Product/ProductListPage";
import ProductPageLayout from "./pages/Product/ProductPageLayout";
import ServicePageLayout from './pages/Business/ServicePageLayout';
import FrozenProductIntroPage from './pages/Business/FrozenProductIntroPage';
import ElaboratedProductIntroPage from './pages/Business/ElaboratedProductIntroPage';
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./components/NotFoundPage";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useProductList } from "./asset/productList";
import { useTranslation } from "react-i18next";
import { useTracking } from './utils/useTracking';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme, taiwanessTheme } from './styles/themeOptions';


const App = () => {
    const { FISH_PRODUCTS, SEAFOOD_PRODUCTS } = useProductList();
    const { i18n } = useTranslation();
    const [banner, setBanner] = useState("");
    const homeRef = useRef();
    const aboutRef = useRef();
    const serviceRef = useRef();
    const productRef = useRef();
    const contactRef = useRef();
    const trigger = useScrollTrigger({ threshold: 100 });

    useTracking();

    const currentTheme = useMemo(() => {
        if (i18n.language !== 'zh-TW') {
            return defaultTheme;
        } else {
            return taiwanessTheme;
        }
    }, [i18n.language]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [trigger]);

    useEffect(() => {
        console.log(i18n.language);
    }, [i18n.language]);

    return (
        <ThemeProvider theme={currentTheme}>
            <NavBar
                homeRef={homeRef}
                aboutRef={aboutRef}
                serviceRef={serviceRef}
                productRef={productRef}
                contactRef={contactRef}
            />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage
                        homeRef={homeRef}
                        aboutRef={aboutRef}
                        serviceRef={serviceRef}
                        productRef={productRef}
                        contactRef={contactRef}
                    />}
                />

                <Route path="/about" element={<AboutUsPageLayout />}>
                    <Route path='/about/history' element={<HistoryPage />} />
                    <Route path='/about/vision' element={<VisionPage />} />
                    <Route path='/about/factory' element={<FactoryPage />} />
                    <Route path='/about/quality' element={<QualityPage />} />
                </Route>

                <Route path="/service" element={<ServicePageLayout />}>
                    <Route path='frozen-product' element={<FrozenProductIntroPage />} />
                    <Route path='elaborated-product' element={<ElaboratedProductIntroPage />} />
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
        </ThemeProvider>
    );
};

export default App;
