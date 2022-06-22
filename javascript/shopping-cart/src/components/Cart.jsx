import React from "react";
import Header from "./Header";
import "./Cart.css";
import { motion } from "framer-motion";

const cartGrid = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.05,
    },
  },
};

const cartItem = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Cart(props) {
  const cartItems = props.cart.map((cat) => {
    return (
      <motion.div className="cartItem" key={cat.id} variants={cartItem}>
        <div className="cartLeft">
          <h2>{cat.name}</h2>
          <img src={cat.image}></img>
        </div>
        <div className="cartRight">
          <p>Quantity: {cat.quantity}</p>
          <div className="cartButtons">
            <button
              onClick={() =>
                props.handleRemoveCat({
                  id: cat.id,
                  name: cat.name,
                  price: cat.price,
                  image: cat.image,
                  text: cat.text,
                })
              }
              className="cartDecreaseQuantity"
            >
              ⬅️
            </button>
            <button
              onClick={() =>
                props.handleAddCat({
                  id: cat.id,
                  name: cat.name,
                  price: cat.price,
                  image: cat.image,
                  text: cat.text,
                })
              }
              className="cartIncreaseQuantity"
            >
              ➡️
            </button>
          </div>
        </div>
      </motion.div>
    );
  });

  return (
    <div className="app">
      <Header cart={props.cart} />
      <div className="container">
        <h1>Cart</h1>
        <motion.div
          className="cartGrid"
          variants={cartGrid}
          initial="hidden"
          animate="visible"
        >
          {props.cart.length === 0 && <p>No cats added to the cart yet</p>}
          {props.cart.length > 0 && cartItems}
        </motion.div>
      </div>
    </div>
  );
}

export default Cart;
