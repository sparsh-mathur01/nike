import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./Pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/productDetails" element={<ProductDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
