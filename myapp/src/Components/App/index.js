import {useState, useEffect} from 'react';
import logo from './../../logo.svg';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState("");
  const [pokeImg, setPokeImg] = useState();

  const[id, setId] = useState(0);

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
    function makeARandomNumber(){
      let random = Math.floor(Math.random()*(151-1+1)+1);
      setId(random);
      console.log(random);
    }
    makeARandomNumber();
    fetchPoke();
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>{pokemon}</h1>
      <button className="button" onClick={handleClick}>click me</button>
        <img src={pokeImg} className="App-logo" alt="logo" />
        
        
      </header>
    </div>
  );
}

export default App;
