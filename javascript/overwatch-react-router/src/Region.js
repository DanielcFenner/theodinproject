import "./App.css";
import { Link, useParams } from "react-router-dom";
import React from "react";

function Region() {
  const [tag, setTag] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setTag(event.target.value);
  }

  return (
    <div className="App">
      <h3>Tag</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="tag"
            onChange={handleChange}
            name="firstName"
            value={tag}
          />
        </form>
        <Link to={tag}>
          <button>Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default Region;
