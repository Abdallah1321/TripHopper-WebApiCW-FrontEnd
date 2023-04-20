import React from "react";
import "./app.css";

import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import SearchPage from "./pages/searchPage/SearchPage";
import Details from "./pages/details/Details";
import Landing from "./pages/landing/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/trips" element={<Home />} />
        <Route path="/trips/search" element={<SearchPage />} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/trips/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
