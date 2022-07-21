import React from "react";
import FixedPhone from "./components/FixedPhone";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Navbar />
      
      <Main />
      
      <Footer />
      <FixedPhone />
    </>
  );
}

export default App;
