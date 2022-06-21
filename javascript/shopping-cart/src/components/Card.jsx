import React from "react";
import Header from "./Header";
import "./Card.css";

function Card(props, { handleAddCat }) {
  return (
    <div className="card">
      <img src={props.image}></img>
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <p>{props.text}</p>
      <button onClick={() => handleAddCat(`${props.id}`)}>ADD TO CART</button>
    </div>
  );
}

export default Card;
