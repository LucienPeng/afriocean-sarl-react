import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUsPage";
import ProductPage from "./pages/ProductPage";
import ProductPageLayout from "./pages/ProductPageLayout";
import Service from './pages/Service';
import FooterComponent from "./components/footer-component";
import ContactPage from "./pages/ContactPage";
import NotFoundComponent from "./components/notFound-component";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Typography } from "@mui/material";

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
                <Route path="/about" element={<AboutPage />}>
                    <Route path="/about/i1" element={<TempIntro>Intro 1</TempIntro>} />
                    <Route path="/about/i2" element={<TempIntro>Intro 2</TempIntro>} />
                    <Route path="/about/i3" element={<TempIntro>Intro 3</TempIntro>} />
                    <Route path="/about/i4" element={<TempIntro>Intro 4</TempIntro>} />
                    <Route path="/about/i5" element={<TempIntro>Intro 5</TempIntro>} />
                </Route>
                <Route path="/service" element={<Service />}>
                    <Route path="/service/s1" element={<TempIntro>Service 1</TempIntro>} />
                    <Route path="/service/s2" element={<TempIntro>Service 2</TempIntro>} />
                    <Route path="/service/s3" element={<TempIntro>Service 3</TempIntro>} />
                </Route>
                <Route path="/product" element={<ProductPageLayout />}>
                    <Route index element={<ProductPage />} />
                    <Route path="/product/fresh" element={<ProductPageLayout />}>
                        <Route path="/product/fresh/p1" element={<TempIntro>Product 1</TempIntro>} />
                        <Route path="/product/fresh/p2" element={<TempIntro>Product 2</TempIntro>} />
                        <Route path="/product/fresh/p3" element={<TempIntro>Product 3</TempIntro>} />
                    </Route>
                </Route>


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
