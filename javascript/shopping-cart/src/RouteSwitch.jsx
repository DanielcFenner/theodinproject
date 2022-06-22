import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import cats from "./components/Cats";

function RouteSwitch() {
  const [cart, setCart] = React.useState([]);

  const handleAddCat = (catid) => {
    const ProductExist = cart.find((item) => item.id === catid.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === catid.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...catid, quantity: 1 }]);
    }
  };

  const handleRemoveCat = (catid) => {
    const ProductExist = cart.find((item) => item.id === catid.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === catid.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...catid, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App cart={cart} cats={cats} />} />
        <Route
          path="/shop"
          element={<Shop cart={cart} cats={cats} handleAddCat={handleAddCat} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              cats={cats}
              handleAddCat={handleAddCat}
              handleRemoveCat={handleRemoveCat}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
