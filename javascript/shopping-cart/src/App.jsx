import React from "react";
import "./App.css";
import Header from "./components/Header";
import homeCat from "./images/homecat.avif";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="heroContainer">
        <img src={homeCat}></img>
        <p>Shop for cutest cats on the entire internet</p>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default App;
