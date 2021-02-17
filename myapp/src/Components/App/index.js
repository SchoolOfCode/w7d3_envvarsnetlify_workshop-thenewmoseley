import {useState, useEffect} from 'react';
import logo from './../../logo.svg';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState("");

  useEffect(()=> {
    fetchPoke();
  }, []);

  async function fetchPoke() {
    const res = await fetch(process.env.REACT_APP_DAD_JOKES_URL);
    const data = await res.json();
    console.log(data);
    setPokemon(data)
  }

  function handleClick () {
    fetchPoke();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="button" onClick={handleClick}/>
        <p>{pokemon.id}</p>
      </header>
    </div>
  );
}

export default App;
