import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Home from "../../components/home/Home";
import Trip from "../../components/trips/Trip";
import Footer from "../../components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Trip />
      <Footer />
    </>
  );
};

export default App;
