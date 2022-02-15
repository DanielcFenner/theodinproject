import React from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const [memesData, setMemesData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemesData(data.data.memes));
  }, []);

  function randomMemeUrl() {
    let memesLength = memesData.length;
    let randomMemeIndex = Math.floor(Math.random() * memesLength);
    return memesData[randomMemeIndex].url;
  }

  function buttonClick() {
    setMemeImage((prevMemeImage) => ({
      ...prevMemeImage,
      randomImage: randomMemeUrl(),
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeImage((prevMemeImage) => {
      return {
        ...prevMemeImage,
        [name]: value,
      };
    });
  }

  console.log(memeImage);

  return (
    <main>
      <div className="grid form">
        <input
          type="text"
          className="line1"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="line2"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
        ></input>
        <button className="formSubmit" onClick={buttonClick}>
          get new meme
        </button>
        <div className="meme">
          <img src={memeImage.randomImage} />
          <h2 className="top meme--text">{memeImage.topText}</h2>
          <h2 className="bottom meme--text">{memeImage.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
