import React from "react";
import Header from "./Header";
import "./Cart.css";

function Cart(props) {
  const cartItems = props.cart.map((cat) => {
    return (
      <div className="cartItem" key={cat.id}>
        <div className="cartLeft">
          <img src={cat.image}></img>
          <h2>{cat.name}</h2>
        </div>
        <div className="cartRight">
          <p>Quantity: </p>
          <div className="cartButtons">
            <button className="cartDecreaseQuantity">⬅️</button>
            <button className="cartIncreaseQuantity">➡️</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="app">
      <Header />
      <div className="container">
        <h1>Cart</h1>
        {props.cart.length === 0 && <p>No cats added to the cart yet</p>}
        {props.cart.length > 0 && cartItems}
      </div>
    </div>
  );
}

export default Cart;
