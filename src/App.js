import { useEffect, useState } from "react";
import Card from "./components/Card";
import api from "./services/api";
import './app.css';
import './appResponsive.css';
import PokeNave from "./components/PokeNav";
import SearchBar from "./components/SearchBar";

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pages, setPages] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);
  const offSet = 24;


  async function getPokemonsByType(pokemonType) {
    const { data: { pokemon } } = await api.get(`/type/${pokemonType}`);
    const resp = await Promise.all(pokemon.map(({ pokemon: { url } }) => api.get(url)));
    const format = resp.map((req) => req.data);
    setPokemons(format);
    setPages(1);
  }

  async function getMaxPokemonsNumber() {
    const { data: { count } } = await api.get('/pokemon');
    setPages(Math.round(count / offSet));
  }

  async function getPokemons() {
    const { data: { results } } = await api.get(`/pokemon?offset=${selectedPage * offSet}&limit=${offSet}`);
    const resp = await Promise.all(results.map(({ url }) => api.get(url)));
    const format = resp.map((req) => req.data);
    setPokemons(format);
  }

  useEffect(() => {
    async function getPokemons() {
      const { data: { results } } = await api.get(`/pokemon?offset=${selectedPage * offSet}&limit=${offSet}`);
      const resp = await Promise.all(results.map(({ url }) => api.get(url)));
      const format = resp.map((req) => req.data);
      setPokemons(format);
    }
    getMaxPokemonsNumber();
    getPokemons();
  }, [selectedPage]);

  async function getPokemonByName(name, pokeType) {
    console.log('Name: ', name);
    console.log('Type: ', pokeType);
    if (!name && !pokeType) {
      getPokemons();
      getMaxPokemonsNumber();
    } else if (!pokeType) {
      const { data } = await api.get(`/pokemon/${name}`);
      setPokemons([data]);
      setPages(1);
    } else {
      getPokemonsByType(pokeType);
    }
  };

  return (
    <>
      <section className="sectionSobre">
        <h2 >Sobre a Pokedex</h2>
        <p >Bem vindo a minha pokedex, ela ainda está em desenvolvimento, mas estou gostado de como esta ficando.</p>
      </section>
      <div className="mainContent">
        <div className="wrapperForm">
          <SearchBar setResult={(name, pokeType) => getPokemonByName(name, pokeType)} />
        </div>
        <main className="poke">
          {pokemons.length > 0
            ? pokemons.map((pokemon) => {
              return (
                <Card pokemon={pokemon} key={`listId_${pokemon.id}`} />
              )
            })
            : <img src='https://i.gifer.com/2iiJ.gif' alt='load' />
          }
        </main>
        <PokeNave setPage={(numberPage) => setSelectedPage(numberPage)} pages={pages} index={selectedPage} />
      </div>
    </>
  );
}

export default App;
