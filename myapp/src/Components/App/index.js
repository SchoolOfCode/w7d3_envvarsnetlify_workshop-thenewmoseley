import {useState, useEffect} from 'react';
import logo from './../../logo.svg';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState("");
  const [pokeImg, setPokeImg] = useState();

  useEffect(()=> {
    fetchPoke();
  }, []);

  async function fetchPoke() {
    const res = await fetch(process.env.REACT_APP_API_URL);
    const data = await res.json();
    console.log(data); //why we cannot retrieve object data alone?
    setPokemon(data.name);
    console.log(data.sprites);
    setPokeImg(data.sprites.front_default);
  }

  function handleClick () {
    fetchPoke();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={pokeImg} className="App-logo" alt="logo" />
        <button className="button" onClick={handleClick}>click me</button>
        <h1>name: {pokemon}</h1>
      </header>
    </div>
  );
}

export default App;
