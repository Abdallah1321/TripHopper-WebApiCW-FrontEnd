import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Home from "../../components/home/Home";
import SearchResult from "../../components/searchResult/SearchResult";
import Footer from "../../components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <SearchResult />
      <Footer />
    </>
  );
};

export default App;
