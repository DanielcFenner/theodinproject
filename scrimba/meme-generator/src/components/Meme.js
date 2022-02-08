import React from "react";

export default function Meme() {
  return (
    <main>
      <form className="grid">
        <input type="text" className="line1" placeholder="Top text"></input>
        <input type="text" className="line2" placeholder="Bottom text"></input>
        <button className="formSubmit">get new meme</button>
      </form>
    </main>
  );
}
