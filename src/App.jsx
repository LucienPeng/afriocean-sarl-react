import "aos/dist/aos.css";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import { Box, Typography } from "@mui/material";
import { ProductItem } from "./components/Product/ProductItem";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUsPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPageLayout from "./pages/ProductPageLayout";
import Service from './pages/Service';
import ContactPage from "./pages/ContactPage";
import NotFoundComponent from "./components/notFound-component";
import itemList from './asset/productList.json';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const TempIntro = (props) => {
    return (
        <Box height='100vh'>
            <Typography textAlign='center' mt={10} variant="h2" color="initial">{props.children}</Typography>
        </Box>
    );
};


const App = () => {
    let [banner, setBanner] = useState("");
    const homeRef = useRef();
    const aboutRef = useRef();
    const serviceRef = useRef();
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
                serviceRef={serviceRef}
                productRef={productRef}
                contactRef={contactRef} />
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
                <Route path="/about" element={<AboutPage />} />
                <Route path="/service" element={<Service />}>
                    <Route path="/service/s1" element={<TempIntro>Service 1</TempIntro>} />
                    <Route path="/service/s2" element={<TempIntro>Service 2</TempIntro>} />
                    <Route path="/service/s3" element={<TempIntro>Service 3</TempIntro>} />
                </Route>
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
                <Route path="/*" element={<NotFoundComponent />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
