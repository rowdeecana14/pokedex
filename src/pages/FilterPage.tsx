import PokemonList from "../components/pokemon-list/PokemonList";

import { useState, useEffect } from "react";
import { getPokemons, getPokemon } from "../store/Api";
import {
  InitialPokemonType,
  FullPokemonType,
} from "../utils/types/PokemonTypes";

export default function FilterPage() {
  const [pokemons, setPokemons] = useState<FullPokemonType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await getPokemons();

      if (response.success) {
        const promises = response.data.results.map(
          async (pokemon: InitialPokemonType) => await getPokemon(pokemon.name)
        );

        const pokemonsData = await Promise.all(promises);
        const processedPokemons: FullPokemonType[] = pokemonsData.map(
          (pokemonData) => ({
            ...pokemonData.data,
          })
        );

        return processedPokemons;
      }

      return [];
    };

    getData().then((data) => {
      if (data) {
        setPokemons(data);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <>{isLoading ? <h3>loading</h3> : <PokemonList pokemons={pokemons} />}</>
  );
}
