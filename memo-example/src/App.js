import { useEffect, useCallback, useState, useMemo } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState('');
  const [otherThing, setOtherThing] = useState('');
  // const [filteredPokemon, setFilteredPokemons] = useState([]);

  useEffect(() => {
    (async function getPokemons() {
      setLoading(true);
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0');
      const json = await response.json();
      setPokemons(json.results);
      setLoading(false);
    })();
  }, []);

  const filteredPokemon = useMemo(() => {
    console.log('calculating filtered pokemon for filter:', filter);

    if (!filter) return pokemons;
    const regexp = new RegExp(filter, 'gi');
    return pokemons.filter((pokemon) => {
      console.log('checking pokemon', pokemon.name, filter);
      return pokemon.name.match(regexp);
    });
  }, [pokemons, filter]);

  // useEffect(() => {
  //   let timeoutId = setTimeout(() => {
  //     console.log('setting filtered pokemon...', filter);
  //     const regexp = new RegExp(filter, 'gi');
  //     setFilteredPokemons(pokemons.filter((pokemon) => {
  //         console.log('checking pokemon', pokemon.name, filter);
  //         return pokemon.name.match(regexp);
  //     }));
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [pokemons, filter]);
  // const setFilterCallback = useCallback((e) => setFilter(e.target.value), []);

  console.log('RENDER FUNCTION IS RUNNING');
  return (
    <div className="App">
      {loading ? (
        <div>Loading pokemons...</div>
      ) : (
        <div>
          <input onChange={(e) => setFilter(e.target.value)} placeholder="Enter a pokemon name..." />
          <input onChange={(e) => setOtherThing(e.target.value)} placeholder="Typing here will cause the render function to run again..." />
          <ul>            
            {/* {pokemons.filter((pokemon) => {
              console.log('checking pokemon', pokemon.name, filter);
              return pokemon.name.match(new RegExp(filter));
            }).map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))} */}
            {filteredPokemon.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
