import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="headerColor">
      <header className="container">
        <div className="headerContainer">
          <strong>🐈 catshop</strong>
          <nav>
            <a>Shop</a>
            <a>Cart</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
