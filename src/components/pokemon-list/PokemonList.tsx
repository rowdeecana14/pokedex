import "./PokemonList.css";

import { Box, Grid, Container, Typography } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState, useEffect } from "react";
import { FullPokemonType } from "../../utils/types/PokemonTypes";
import PokemonCard from "../pokemon-card/PokemonCard";
import { pokemonAssets } from "../../utils/helpers/pokemonAssets";

export default function PokemonList({
  pokemons,
}: Readonly<{ pokemons: FullPokemonType[] }>) {
  const [isLoading, setIsLoading] = useState(true);

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
              Random P<i className="title-pokeball"></i>
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
