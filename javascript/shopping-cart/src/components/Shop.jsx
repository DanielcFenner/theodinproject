import React from "react";
import Header from "./Header";
import "./Shop.css";
import Card from "./Card";
import { motion } from "framer-motion";

const shopGrid = {
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

const item = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Shop(props) {
  const gridItems = props.cats.map((cat) => {
    return (
      <motion.div key={cat.id} className="item" variants={item}>
        <Card
          id={cat.id}
          name={cat.name}
          image={cat.image}
          text={cat.text}
          price={cat.price}
          handleAddCat={cat.handleAddCat}
        />
      </motion.div>
    );
  });

  return (
    <div className="app">
      <Header />
      <div className="container">
        <h1>Shop</h1>
        <motion.div
          className="shopGrid"
          variants={shopGrid}
          initial="hidden"
          animate="visible"
        >
          {gridItems}
        </motion.div>
      </div>
    </div>
  );
}

export default Shop;
