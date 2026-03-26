import React from "react";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
