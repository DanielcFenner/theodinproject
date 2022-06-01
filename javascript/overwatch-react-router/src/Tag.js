import "./App.css";
import { Link, useParams } from "react-router-dom";
import React from "react";

function Tag() {
  let params = useParams();

  const [player, setPlayer] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  async function fetchPlayer() {
    const fetchPlayer = await fetch(
      `https://owapi.io/profile/${params.platform}/${params.region}/${params.tag}`
    );
    const player = await fetchPlayer.json();
    setPlayer(player);
    setLoading(false);
  }

  React.useEffect(() => {
    fetchPlayer();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="App">
      <h3>{player.username}</h3>
      <img src={player.portrait}></img>
      <p>
        <strong>tank</strong> rank {player.competitive.tank.rank}
      </p>
      <p>
        <strong>damage</strong> rank {player.competitive.damage.rank}
      </p>
      <p>
        <strong>support</strong> rank {player.competitive.support.rank}
      </p>
      <div></div>
    </div>
  );
}

export default Tag;
