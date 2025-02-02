import PokemonRandom from "../components/pokemon-random/PokemonRandom";
import Carousel from "../components/carousel/Carousel";
import { Container } from "@mui/material";
import Loader from "../components/loader/Loader";

import { useState, useEffect } from "react";
import { getRandomPokemons } from "../store/Api";
import {
  FullPokemonType,
} from "../utils/types/PokemonTypes";

export default function HomePage() {
  const [pokemons, setPokemons] = useState<FullPokemonType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await getRandomPokemons();

      if (!response.success) {
        return [];
      }

      return response.data;
    };

    getData().then((data) => {
      if (data) {
        setPokemons(data);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <>
      {isLoading ? (
          <Loader />
      ) : (
          <Container sx={{marginBottom:"5rem"}}>
            <Carousel pokemons={pokemons} />
            <PokemonRandom pokemons={pokemons} />
          </Container>
      )}
    </>
  );
}
