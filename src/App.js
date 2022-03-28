import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavComponent from "./components/nav-component";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ProductPage from "./pages/product-page";
import FooterComponent from "./components/footer-component";
import ContactPage from "./pages/contact-page";

const App = () => {
  let [banner, setBanner] = useState("");
  return (
    <div className="App">
      <NavComponent banner={banner} setBanner={setBanner} />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
      </Routes>
      <FooterComponent />
    </div>
  );
};

export default App;
