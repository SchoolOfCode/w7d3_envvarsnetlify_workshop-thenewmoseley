import {useState, useEffect} from 'react';
import logo from './../../logo.svg';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState("");
  const [pokeImg, setPokeImg] = useState("");
  const[id, setId] = useState(1);

  useEffect(()=> {
    fetchPoke();
  }, []);

  async function fetchPoke(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
    fetchPoke(id);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="new" >Random Pokemon</h1>
      <button className="button" onClick={handleClick}>Get random Pokemon</button>
      <h1>{pokemon}</h1>
      
        <img src={pokeImg} className="App-logo" alt="" />
        
        
      </header>
    </div>
  );
}

export default App;
