import {useState, useEffect} from 'react';
import logo from './../../logo.svg';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState("");

  useEffect(()=> {
    fetchPoke();
  }, []);

  async function fetchPoke() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const data = await res.json();
    console.log(data); //why we cannot retrieve object data alone?
    setPokemon(data.name);
  }

  function handleClick () {
    fetchPoke();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="button" onClick={handleClick}/>
        <p>{pokemon}</p>
      </header>
    </div>
  );
}

export default App;
