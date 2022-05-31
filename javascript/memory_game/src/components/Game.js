import React from "react";
import "./Game.css";

export default function Game() {
  const [level, setLevel] = React.useState(1);
  const [pokemon, setPokemon] = React.useState([]);
  const [guesses, setGuesses] = React.useState([]);

  function randomPoke() {
    return Math.ceil(Math.random() * 897);
  }

  function guess(id) {
    setGuesses((oldGuesses) => [...oldGuesses, id]);
    shufflePokemon();
  }

  React.useEffect(() => {
    if (!guessCheck(guesses)) {
      setLevel(1);
    }

    if (guessCheck(guesses) && guesses.length === level) {
      setLevel((oldIndex) => {
        let newIndex = oldIndex + 1;
        return newIndex;
      });
    }
  }, [guesses]);

  function guessCheck(guesses) {
    let object = {};
    for (let i = 0; i < guesses.length; i++) {
      const element = guesses[i];

      if (object[element]) {
        return false;
      } else {
        object[element] = 1;
      }
    }
    console.log(object);
    return true;
  }

  function shufflePokemon() {
    setPokemon((oldPokemon) => {
      let new_array = oldPokemon;
      for (let i = new_array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [new_array[i], new_array[j]] = [new_array[j], new_array[i]];
      }
      return new_array;
    });
  }

  React.useEffect(
    function () {
      setPokemon([]);
      setGuesses([]);
      for (let i = 0; i < level; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + randomPoke())
          .then((res) => res.json())
          .then((data) => setPokemon((oldPokemon) => [...oldPokemon, data]));
      }
    },
    [level]
  );

  const pokeElements = pokemon.map((pokemonElement) => {
    return (
      <div
        key={pokemonElement.id}
        className="pokemonContainer"
        onClick={() => guess(pokemonElement.id)}
      >
        <img
          className="pokemonContainer--image"
          src={pokemonElement.sprites.other["official-artwork"].front_default}
        ></img>
        <p>{pokemonElement.name}</p>
      </div>
    );
  });

  return (
    <div className="gameContainer">
      <h4>Level {level}</h4>
      <h4>
        Guesses {guesses.length} / {level}
      </h4>
      <p>
        To get through each round you need to click every pokemon without
        clicking the same pokemon twice
      </p>
      <div className="pokemonGrid">{pokeElements}</div>
    </div>
  );
}
