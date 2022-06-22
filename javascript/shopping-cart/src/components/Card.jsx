import React from "react";
import Header from "./Header";
import "./Card.css";

function Card({ name, image, price, text, id, handleAddCat }) {
  return (
    <div className="card">
      <img src={image}></img>
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <p>{text}</p>
      <button
        onClick={() =>
          handleAddCat({
            id: id,
            name: name,
            price: price,
            image: image,
            text: text,
          })
        }
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default Card;
