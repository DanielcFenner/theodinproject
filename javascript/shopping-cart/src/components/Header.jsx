import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
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
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
