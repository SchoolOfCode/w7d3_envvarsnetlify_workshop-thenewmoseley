import logo from './../../logo.svg';
import './App.css';

function App() {

  const [joke, setJoke] = useState("");

  useEffect(()=> {
    fetchJoke();
  }, []);

  async function fetchJoke() {
    const res = await fetch(process.env.REACT_APP_DAD_JOKES_URL)
    const data = await res.json();
    setJoke(data.joke)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
