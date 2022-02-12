import { useEffect, useState } from "react";
import Card from "./components/Card";
import api from "./services/api";
import './app.css'

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      const { data: { results } } = await api.get('/pokemon');
      const resp = await Promise.all(results.map(({ url }) => api.get(url)));
      const format = resp.map((req) => req.data);

      setPokemons(format);
    }

    getPokemons();
  }, []);

  return (
    <>
      <h1 className="title">Pokedex</h1>
      <div className="poke">
        {pokemons.length > 0 && pokemons.map((pokemon) => {
          return (
            <Card pokemon={pokemon} />
          )
        })}
      </div>
    </>
  );
}

export default App;
