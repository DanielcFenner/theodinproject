import React from "react";
import memesDataImport from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const [memesData, setMemesData] = React.useState(memesDataImport);

  function randomMemeUrl() {
    let memesLength = memesData.data.memes.length;
    let randomMemeIndex = Math.floor(Math.random() * memesLength);
    console.log(randomMemeIndex);
    return memesData.data.memes[randomMemeIndex].url;
  }

  function buttonClick() {
    setMemeImage((prevMemeImage) => ({
      ...prevMemeImage,
      randomImage: randomMemeUrl(),
    }));
  }

  return (
    <main>
      <div className="grid form">
        <input type="text" className="line1" placeholder="Top text"></input>
        <input type="text" className="line2" placeholder="Bottom text"></input>
        <button className="formSubmit" onClick={buttonClick}>
          get new meme
        </button>
        <img src={memeImage.randomImage} />
      </div>
    </main>
  );
}
