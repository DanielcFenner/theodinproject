import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function modulo(n, m) {
    let remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
  }

  function nextPerson() {
    setIndex((oldIndex) => {
      let newIndex = modulo(oldIndex + 1, people.length);

      return newIndex;
    });
  }

  function prevPerson() {
    setIndex((oldIndex) => {
      let newIndex = modulo(oldIndex - 1, people.length);
      return newIndex;
    });
  }

  function surpriseMe() {
    let newIndex = index;
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * people.length);
    }
    setIndex(newIndex);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={surpriseMe}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
