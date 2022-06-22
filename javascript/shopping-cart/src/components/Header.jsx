import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ cart }) {
  // function cartLength() {
  //   if (cart === []) {
  //     return "empty";
  //   } else {
  //     return cart.length;
  //   }
  // }
  console.log(cart);

  return (
    <div className="headerColor">
      <header className="container">
        <div className="headerContainer">
          <Link to="/">
            <strong>🐈 catshop</strong>
          </Link>

          <nav>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
            <div className="cartAmount">
              {cart.length === 0 && ""}
              {cart.length > 0 && cart.length}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
