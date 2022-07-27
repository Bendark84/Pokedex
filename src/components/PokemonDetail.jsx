import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setCharacter(res.data));
  }, []);
  // console.log(character);
  return (
    <div className="card-container-detail">
      <h1>Detail Pokedex</h1>
      <div className="card-detail">
        <div className="card-detail-info">
          <img
            src={character.sprites?.other.dream_world.front_default}
            alt=""
          />
          <h2>{character.name}</h2>
          <h3>Number Pokemon: {character.id}</h3>
          <h3>Height: {character.height}</h3>
          <h3>Weight: {character.weight}</h3>
        </div>
        <div className="card-info">
          <ul className="ability">
            <h3>Ability: </h3>{' '}
            <li> {character.abilities?.[0].ability.name} </li>
            <li> {character.abilities?.[1].ability.name} </li>
            <li> {character.abilities?.[2]?.ability.name} </li>
          </ul>
          <ul className="types">
            <h3>Types: </h3>
            <li> {character.types?.[0].type.name}</li>
            <li>{character.types?.[1]?.type.name}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
