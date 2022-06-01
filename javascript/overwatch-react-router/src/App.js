import "./App.css";
import { Link } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <h3>Platform</h3>
      <div>
        <Link to="/pc">
          <button>PC</button>
        </Link>
        <Link to="/xbl">
          <button>Xbox Live</button>
        </Link>
        <Link to="/psn">
          <button>PSN</button>
        </Link>
        <Link to="nintendo-switch">
          <button>Nintendo Switch</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
