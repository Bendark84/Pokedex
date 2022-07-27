import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CharacterItem from './CharacterItem';

const Pokedex = () => {
  const user = useSelector((state) => state.user);

  const [characters, setCharacters] = useState([]);
  const [characterSearch, setCharacterSearch] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => setCharacters(res.data.results));

    axios
      .get('https://pokeapi.co/api/v2/type/')
      .then((res) => setPokemonTypes(res.data.results));
  }, []);
  console.log(pokemonTypes);

  const search = (e) => {
    e.preventDefault();
    // alert(characterSearch);
    navigate(`/pokedex/${characterSearch}`);
  };

  const filterTypes = (e) => {
    // alert('Se selecciono un tipo de pokemon ' + e.target.value);
    axios.get(e.target.value).then((res) => setCharacters(res.data.pokemon));
  };

  return (
    <div>
      <div className="pokedex-info">
        <h1 className="pokedex">Pokedex</h1>
        <p>
          Welcome <strong> {user} </strong>, here you can find your favorite
          pokemon
        </p>
        <form onSubmit={search}>
          <input
            type="text"
            value={characterSearch}
            onChange={(e) => setCharacterSearch(e.target.value)}
            placeholder="type your pokemon"
          />
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <select onChange={filterTypes}>
          <option value="">All pokemons</option>
          {pokemonTypes.map((type) => (
            <option value={type.url} key={type.url}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      <ul>
        {characters.map((character) => (
          <CharacterItem
            characterUrl={character.url ? character.url : character.pokemon.url}
            key={character.url ? character.url : character.pokemon.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
