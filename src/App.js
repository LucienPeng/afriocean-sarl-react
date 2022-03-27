import React from "react";
import { Routes, Route } from "react-router-dom";
import NavComponent from "./components/nav-component";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ProductPage from "./pages/product-page";
import FooterComponent from "./components/footer-component";

const App = () => {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
};

export default App;
