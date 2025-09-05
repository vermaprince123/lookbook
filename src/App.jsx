import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lookbook from "./components/Lookbook";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Lookbook</h1>
        <Routes>
          <Route path="/" element={<Lookbook />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
