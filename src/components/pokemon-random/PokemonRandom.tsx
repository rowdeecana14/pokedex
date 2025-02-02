import "./PokemonRandom.css";

import { Box, Grid, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { FullPokemonType } from "../../utils/types/PokemonTypes";
import PokemonCard from "../pokemon-card/PokemonCard";
import { pokemonAssets } from "../../utils/helpers/pokemonAssets";

export default function PokemonRandom({
  pokemons,
}: Readonly<{ pokemons: FullPokemonType[] }>) {
  const [isLoading, setIsLoading] = useState(true);

  const pokedex = new URL(`/src/assets/pokedex.svg`, import.meta.url).href;

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>isLoading</h1>
      ) : (
        <Container maxWidth="lg" sx={{ marginTop: "6rem" }}>
          <Box marginBottom={6}>
            <Typography variant="h3" className="title">
              Random P
              <i
                className="title-pokeball"
                style={{
                  backgroundImage: `url('${pokedex}')`,
                  backgroundRepeat: "no-repeat",
                }}
              ></i>
              kemons
            </Typography>
          </Box>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {pokemons.map((pokemon) => (
              <PokemonCard
                key={`p-${pokemon.id}`}
                pokemon={pokemon}
                assets={pokemonAssets(pokemon)}
              />
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}
