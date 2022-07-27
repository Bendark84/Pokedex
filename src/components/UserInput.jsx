import React, { useState } from 'react';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserInput = () => {
  const [pokeName, setPokeName] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // alert(pokeName);
    dispatch(changeUser(pokeName));
    navigate('/pokedex');
  };

  return (
    <div className="card-contanier-input">
      <div className="card-input">
        <form onSubmit={submit}>
          <h1>POKEDEX</h1>
          <h2>Hello Trainer!</h2>
          <img
            src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png"
            alt=""
          />
          <h4>Give your name to start</h4>
          <input
            type="text"
            value={pokeName}
            onChange={(e) => setPokeName(e.target.value)}
            placeholder="User Name"
          />
          <button>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
