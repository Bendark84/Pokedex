import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CharacterItem = ({ characterUrl }) => {
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(characterUrl).then((res) => setCharacter(res.data));
  }, []);

  console.log(character);

  return (
    <div
      className="card-container-item"
      onClick={() => navigate(`/pokedex/${character.id}`)}
    >
      <div className="card-item">
        <h1>{character.name}</h1>
        <img src={character.sprites?.other.dream_world.front_default} alt="" />
        <h2>Weight: {character.weight}</h2>
        <h2>Height: {character.height}</h2>
        <h2>
          Abilities: {character.abilities?.[0]?.ability.name}{' '}
          {/* {character.abilities?.[1]?.ability.name}{' '}
          {character.abilities?.[2]?.ability.name} */}
        </h2>
      </div>
    </div>
  );
};

export default CharacterItem;
