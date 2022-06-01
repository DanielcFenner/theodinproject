import "./App.css";
import { Link, useParams } from "react-router-dom";
import React from "react";

function Tag() {
  let params = useParams();

  const [player, setPlayer] = React.useState({});

  async function fetchPlayer() {
    const fetchPlayer = await fetch(
      `https://owapi.io/profile/${params.platform}/${params.region}/${params.tag}`
    );
    const player = await fetchPlayer.json();
    setPlayer(player);
  }

  React.useEffect(() => {
    fetchPlayer();
  }, []);

  return (
    <div className="App">
      <h3>{player.username}</h3>

      <img src={player.portrait}></img>
      <h3>rank</h3>
      <h4>tank</h4>
      <p>rank {player.competitive.tank.rank}</p>
      <h4>damage</h4>
      <p>rank {player.competitive.damage.rank}</p>
      <h4>support</h4>
      <p>rank {player.competitive.support.rank}</p>
      <div></div>
    </div>
  );
}

export default Tag;
