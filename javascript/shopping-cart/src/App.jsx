import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import homeCat from "./images/homecat.avif";
import { motion } from "framer-motion";

function App(props) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="app">
      <Header />
      <motion.div
        className="heroContainer"
        variants={variants}
        animate="visible"
        initial="hidden"
      >
        <img src={homeCat}></img>
        <p>Shop for cutest cats on the entire internet</p>
        <Link to="/shop">
          <button>SHOP NOW</button>
        </Link>
      </motion.div>
    </div>
  );
}

export default App;
