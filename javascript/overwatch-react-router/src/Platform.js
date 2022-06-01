import "./App.css";
import { Link, useParams } from "react-router-dom";
import React from "react";

function Platform() {
  return (
    <div className="App">
      <h3>Region</h3>
      <div className="buttons">
        <Link to="us">
          <button>US</button>
        </Link>
        <Link to="eu">
          <button>EU</button>
        </Link>
        <Link to="kr">
          <button>KR</button>
        </Link>
        <Link to="cn">
          <button>CN</button>
        </Link>
      </div>
    </div>
  );
}

export default Platform;
