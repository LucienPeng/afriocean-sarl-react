import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavComponent from "./components/nav-component";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ProductPage from "./pages/product-page";
import FooterComponent from "./components/footer-component";
import ContactPage from "./pages/contact-page";
import NotFoundComponent from "./components/notFound-component";

const App = () => {
  let [banner, setBanner] = useState("");
  return (
    <div className="App">
      <NavComponent banner={banner} setBanner={setBanner} />
      <Routes>
        <Route path="/afriocean-sarl-react" element={<HomePage />} />
        <Route
          path="/afriocean-sarl-react/about"
          element={<AboutPage banner={banner} setBanner={setBanner} />}
        />
        <Route
          path="/afriocean-sarl-react/product"
          element={<ProductPage banner={banner} setBanner={setBanner} />}
        />
        <Route
          path="/afriocean-sarl-react/contact"
          element={<ContactPage banner={banner} setBanner={setBanner} />}
        />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
      <FooterComponent />
    </div>
  );
};

export default App;
