import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import FixedPhone from "./components/FixedPhone";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllCategory from "./pages/AllCategory";
import Cart from "./pages/Cart";
import Cooperation from "./pages/Cooperation";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Oferta from "./pages/Oferta";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Scoring from "./pages/Scoring";
import SubCategory from "./pages/SubCategory";
import SubMultiCategory from "./pages/SubMultiCategory";
import Dashboard from "./pages/User/Dashboard";
import MyCard from "./pages/User/MyCard";
import Personal from "./pages/User/Personal";
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
          <Route path="/user-dashboard" element={<Dashboard />} />
          <Route path="/my-cards" element={<MyCard />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/cooperation" element={<Cooperation />} />
          <Route path="/oferta" element={<Oferta />} />
        </Routes>

        <Footer />
        <FixedPhone />
      </Router>
    </>
  );
}

export default App;
