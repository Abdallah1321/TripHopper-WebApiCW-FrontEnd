import React from "react";
import "./app.css";

import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Details from "./pages/details/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/trips" element={<Home />} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/trips/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
