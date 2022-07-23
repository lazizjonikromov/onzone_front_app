import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import FixedPhone from "./components/FixedPhone";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllCategory from "./pages/AllCategory";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Main from "./pages/Main";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Scoring from "./pages/Scoring";
import SubCategory from "./pages/SubCategory";
import SubMultiCategory from "./pages/SubMultiCategory";
import UserDashboard from "./pages/UserDashboard";
import Wishlist from "./pages/Wishlist";

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
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-card" element={<Scoring />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />

        </Routes>

        <Footer />
        <FixedPhone />
      </Router>
    </>
  );
}

export default App;
