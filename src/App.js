import { useEffect, useState } from "react";
import Card from "./components/Card";
import api from "./services/api";

function App() {

  const [pokemon, setPokemon] = useState('');

  async function getPokemon(name) {
    await api.get(`pokemon/${name}`).then(({ data }) => {
      console.log('Resultado interno axios: ', data);
      setPokemon(data);

    });
  }

  useEffect(() => {
    getPokemon('togekiss');
  }, []);

  const Ditto = () => {
    getPokemon('ditto');
  }

  const Pikachu = () => {
    getPokemon('pikachu');
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}>
      <button onClick={Ditto} style={{ background: '#666' }}>Ditto</button>
      <div>
        {pokemon && <Card pokemon={pokemon} />}
      </div>
      <button onClick={Pikachu} style={{ background: '#666' }}>Pikachu</button>
    </div>
  );
}

export default App;
