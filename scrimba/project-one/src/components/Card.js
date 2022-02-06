import React from "react";
import profilePic from "../img/cosmic.webp";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <img src={profilePic}></img>
      <div className="title-block">
        <h3>Cosmic Nami</h3>
        <h4>Elementalist</h4>
        <small>nami.league</small>
      </div>
      <div className="buttons">
        <button>
          <i className="bi bi-envelope"></i>Email
        </button>
        <button>
          <i className="bi bi-linkedin"></i>LinkedIn
        </button>
      </div>
      <div className="about">
        <h5>About</h5>
        <p>
          A headstrong young vastaya of the seas, Nami was the first of the
          Marai tribe to leave the waves and venture onto dry land, when their
          ancient accord with the Targonians was broken. With no other option,
          she took it upon herself to complete the sacred ritual that would
          ensure the safety of her people.
        </p>
      </div>
      <div className="interests">
        <h5>Interests</h5>
        <p>
          During Nami's adolescence, the moonstone in the center of the Marai's
          village began to dim. Nami Nami attempted the trial of the Tidecaller,
          but she was denied due to her impulsiveness. Instead, another warrior
          named Rasho was sent down into the deep sea to retrieve the pearl.
        </p>
      </div>
      <footer>
        <i className="bi bi-github"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-instagram"></i>
      </footer>
    </div>
  );
}
