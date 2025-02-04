import "./PokemonList.css";
import "../pagination/Pagination.css";

import PokemonCard from "../pokemon-card/PokemonCard";
import FetchLoader from "../loader/fetch-loader/FetchLoader";
import ScrollLoader from "../loader/scroll-loader/ScrollLoader";
import { Box, Grid, Container, Typography } from "@mui/material";
import { pokemonAssets } from "../../utils/helpers/pokemonAssets";
import useInfiniteScroll from "../../utils/hooks/useInfiniteScroll";

export default function PokemonList() {
  const { pokemons, isLoading, isFetchingMore, observerRef } =
    useInfiniteScroll();
  const pokedex = new URL(`/src/assets/pokedex.svg`, import.meta.url).href;

  return (
    <>
      {isLoading ? (
        <FetchLoader />
      ) : (
        <Container maxWidth="lg" sx={{ marginTop: "6rem" }}>
          <Box marginBottom={6}>
            <Typography variant="h3" className="title">
              Filter P
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
            rowSpacing={2}
            columnSpacing={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {pokemons.map((pokemon, index) => (
              <PokemonCard
                key={`p-${pokemon.id}-${index}`}
                pokemon={pokemon}
                assets={pokemonAssets(pokemon)}
              />
            ))}
          </Grid>

          {isFetchingMore && <ScrollLoader />}
          <Container ref={observerRef} style={{ height: "1px" }} />
        </Container>
      )}
    </>
  );
}
