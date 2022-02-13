import { useEffect, useState } from "react";
import Card from "./components/Card";
import api from "./services/api";
import './App.css'
import PokeNave from "./components/PokeNav";

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pages, setPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const offSet = 24;

  async function getMaxPokemonsNumber() {
    const { data: { count } } = await api.get('https://pokeapi.co/api/v2/pokemon');
    setPages(Math.round(count / offSet));
  }

  getMaxPokemonsNumber()

  useEffect(() => {
    async function getPokemons() {
      const { data: { results } } = await api.get(`/pokemon?offset=${selectedPage * offSet}&limit=${offSet}`);
      const resp = await Promise.all(results.map(({ url }) => api.get(url)));
      const format = resp.map((req) => req.data);
      setPokemons(format);
    }

    getPokemons();
  }, [selectedPage])

  return (
    <>
      <section className="sectionSobre">
        <h2 className="sobrePokeH2">Sobre a Pokedex</h2>
        <p className="sobrePokeP">Bem vindo a minha pokedex, ela ainda está em desenvolvimento, mas estou gostado de como esta ficando.</p>
      </section>
      <div className="mainContent">
        <main className="poke">
          {pokemons.length > 0 && pokemons.map((pokemon) => {
            return (
              <Card pokemon={pokemon} key={`listId_${pokemon.id}`} />
            )
          })}
        </main>
        <PokeNave onPress={(numberPage) => setSelectedPage(numberPage)} pages={pages} />
      </div>
    </>
  );
}

export default App;
