import React from "react";
import { Routes, Route } from "react-router-dom";
import NavComponent from "./components/nav-component";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ProductPage from "./pages/product-page";
import FooterComponent from "./components/footer-component";
const url = "https://lucienpeng.github.io/afriocean-sarl-react";

const App = () => {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path={url} element={<HomePage />} />
        <Route path={url + "/about"} element={<AboutPage />} />
        <Route path={url + "/product"} element={<ProductPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
};

export default App;
