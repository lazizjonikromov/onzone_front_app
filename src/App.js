import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import FixedPhone from "./components/FixedPhone";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllCategory from "./pages/AllCategory";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import ProductDetails from "./pages/ProductDetails";
import SubCategory from "./pages/SubCategory";
import SubMultiCategory from "./pages/SubMultiCategory";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/all-category" element={<AllCategory />} />
          <Route path="/sub-category" element={<SubCategory />} />
          <Route path="/sub-multi-category" element={<SubMultiCategory />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
        <FixedPhone />
      </Router>
    </>
  );
}

export default App;
