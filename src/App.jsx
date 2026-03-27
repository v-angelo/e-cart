import NavBar from "./components/NavBar";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useEffect, useState } from "react";
import {
  addToCart,
  displayCartItems,
  removeFromCart,
} from "./services/apiCall";

function App() {
  const [cart, setCart] = useState([]);
  const [call, setCall] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const displayCart = async () => {
      const data = await displayCartItems();
      setCart(data);
      console.log(data);
      setItemCount(data.length);

      let total = data.reduce((acc, curr) => {
        acc += curr.quantity * curr.price;
        return acc;
      }, 0);
      setTotalPrice(total.toFixed(2));
    };
    displayCart();
  }, [call]);

  return (
    <BrowserRouter>
      <NavBar itemCount={itemCount} />
      <Routes>
        <Route
          path="/"
          element={<AllProducts setCall={setCall} call={call} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              call={call}
              setCall={setCall}
              itemCount={itemCount}
              totalPrice={totalPrice}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
