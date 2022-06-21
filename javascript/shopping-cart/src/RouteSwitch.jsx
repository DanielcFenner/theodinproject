import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import cats from "./components/Cats";

function RouteSwitch() {
  const [cart, setCart] = React.useState([]);

  function handleAddCat(catid) {
    console.log(catid);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App cart={cart} cats={cats} />} />
        <Route
          path="/shop"
          element={<Shop cart={cart} cats={cats} handleAddCat={handleAddCat} />}
        />
        <Route path="/cart" element={<Cart cart={cart} cats={cats} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
